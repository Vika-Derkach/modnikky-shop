const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();

app.use("/api/auth");

const PORT = config.get("port") || 5000;

// app.listen(PORT, () => console.log("App has been started on the port "));
async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    app.listen(PORT, () => {
      console.log(`Service is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
