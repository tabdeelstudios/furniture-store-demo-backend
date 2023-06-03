const mongoose = require("mongoose");
const { FurnitureSchema } = require("./FurnitureSchema");

const furniture = mongoose.model("furniture", FurnitureSchema);

module.exports = { furniture };
