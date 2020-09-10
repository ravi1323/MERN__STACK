const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  item: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
