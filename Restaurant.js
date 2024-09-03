const mongoose = require('mongoose');

// Define the schema
const restaurantSchema = new mongoose.Schema({
  image_path: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  restaurant_id: {
    type: String,
    required: true
  }
});



// Define and export the model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
