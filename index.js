require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const mongodbString = process.env.mongodbString;
const { furniture } = require("./data/furniture");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongodbString);

app.get("/", async (req, res) => {
  const furnitureData = await furniture.find({});
  res.json(furnitureData);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
