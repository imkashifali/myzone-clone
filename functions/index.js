const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
                                  "sk_test_DooioTfTHYU1biN5xDqFUFzT00r3uDAzMY");

//API

//--APP CONFIG
const app = express();

//--MIDDLEWARE
app.use(cors({ origin: true }));
app.use(express.json());

//--API ROUTE

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//--LISTEN COMMAND
exports.api = functions.https.onRequest(app);
// http://localhost:5001/myzone-challenge/us-central1/api
