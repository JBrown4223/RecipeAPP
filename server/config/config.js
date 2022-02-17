export const PORT = 8080;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://dbUser2:Clippers@cluster0.92fl8.mongodb.net/RecipeAppDB?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://dbUser2:Clippers@cluster0.92fl8.mongodb.net/RecipeAppDB?retryWrites=true&w=majority'
    }
}