const mongoose = require('mongoose');

export const RecipeSchema = new mongoose.Schema({

    name: { type: String},
    ingredients: {type: Array, required: true},
    steps: {type: Array, required: true},
    tags:{type: Array, required: true},
    imageURL: {type: String, required: true },
    originalURL: {type: String, required: true },
    createdBy: {type: String, required: true},
    likes: {type: Number, required: true },
    shares: {type: Number, required: true }

})