const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://prachiWadhwa:Prachi2003@cluster0.m2pqlrx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("connected to port 3000"));
