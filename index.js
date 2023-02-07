require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index.js");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ extended: true }));
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
