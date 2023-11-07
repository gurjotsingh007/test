const express = require("express");
const app = express();

app.use(express.json());

const user = require("./routes/userRoute");

app.use("/api/g1", user);

module.exports = app;