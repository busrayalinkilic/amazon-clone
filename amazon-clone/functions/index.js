const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LCJszDrHkrFrd4i2h7jagr9E68gFz36dCJVMhUZkfIWjlYMO6sA5vba2zOvLnb8FL9J8pbaFBz0WYXJbGwWYMaG00olyTSzvl"
);

const app = express();


app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "tl",
  });


  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api = functions.https.onRequest(app);


//http://localhost:5001/challenge-72b87/us-central1/api