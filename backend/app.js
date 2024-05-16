//loads the variable from .env file to process.env (sensitive info about your source project should be kept out in .env file)
require('dotenv').config()

const PORT = process.env.PORT

// imports the Express framework into your Node.js application, allowing you to use its functions and features to create a web server or API.
const express = require('express');

// imports the cors middleware, which will be used to handle cross-origin requests.
const cors = require('cors');

const {db} = require('./db/db');

//The readdirSync function is used to synchronously read the contents of a directory. It returns a list of filenames or directory names within the specified directory.
const {readdirSync} = require('fs')

//creates an instance of an Express application. 
//It's essentially your web server, which you can configure with routes, middleware, and other logic.coming from express
const app = express()

//middlewares
//By using express.json(), the server can handle JSON payloads from clients, allowing it to parse and understand JSON data sent in requests (e.g., data from POST or PUT requests).
app.use(express.json()) //because we want our data to be in jason

//you're allowing requests from all origins by default. If needed, you can configure CORS to allow only specific origins, methods, or headers.
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World');
})

//routes
//reads the contents of the ./routes directory (relative to the current file) synchronously. It returns an array of filenames and/or subdirectory names within the ./routes directory.
//The code dynamically loads and integrates route modules from the ./routes directory. This allows you to easily add new route files without manually updating the main application code.
//Common Base Path: By using '/api/v1' as the base path, all routes from the ./routes directory will be accessible under this common prefix. This is useful for organizing routes and creating a consistent API structure.
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/'+ route)))

const server = () => {
    db()
    app.listen(PORT, () =>{
        console.log("Listening to port:", PORT)
    })
}

server()
