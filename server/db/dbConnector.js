const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { RecipeSchema } = require('./dbSchemas/msc_recipes.js');
const { UserSchema } = require('./dbSchemas/msc_users.js');
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
 * This is a basic setup... a secret manager would be used to connect to mongoDB
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Recipes = mongoose.model('Recipes', RecipeSchema);
const Users = mongoose.model('Users', UserSchema);

export { Recipes, Users };
