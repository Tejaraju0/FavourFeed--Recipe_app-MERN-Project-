const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.',
  },
  description: {
    type: String,
    required: 'This field is required.',
  },
  email: {
    type: String,
    required: 'This field is required.',
  },
  ingredients: {
    type: Array,
    required: 'This field is required.',
  },
  category: {
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian', 'Spanish', 'Italian'],
    required: 'This field is required.',
  },
  image: {
    type: String,
  },
})

module.exports = mongoose.model('Recipe', recipeSchema);
