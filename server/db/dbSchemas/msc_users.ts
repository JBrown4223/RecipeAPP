const mongoose = require('mongoose');


export const UserSchema = new mongoose.Schema({
    id: {type: Number,required: true},
    username: {type: String, required: true },
    password: {type: String, required: true },
    name: {type: String, required: true },
    profilePic: {type: String },
    recipes: { type: Array },
    favourites: { type: Array }
});