const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth.routes");
const clothesRoutes = require("./routes/clothes.routes");
const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/clothes", clothesRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  return res.render("error");
});

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
