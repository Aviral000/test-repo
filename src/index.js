const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const testRouter = require("./routes/test.route");

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected"))
    .catch(() => console.log("error in connectiing"))

app.use(express.json());

app.use("/test", testRouter);

app.listen(process.env.PORT_NUMBER, () => {
    console.log("server connected")
})