const mongoose = require('mongoose');

const whiskeySchema = new mongoose.Schema({
  image: {type: String},
  origin: {type: String},
  type: {type: String},
  brand: {type: String},
  variant: {type: String},
  age: {type: Number},
  notes: {type: Array},
  abv: {type: Number},
  price: {type: Number}
});

module.exports = mongoose.model('Whiskey', whiskeySchema);