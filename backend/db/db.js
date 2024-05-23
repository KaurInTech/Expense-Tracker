//imports Mongoose into the Node.js environment, allowing you to use its functionalities for interacting with MongoDB databases.
const mongoose = require('mongoose');

//defines an asynchronous function named db. 
//The async keyword indicates that this function might contain await expressions, allowing asynchronous operations to be handled more efficiently without blocking the main thread.
const db = async () => {
    try{
        mongoose.set('strictQuery',false)
        //This line connects to a MongoDB database using Mongoose's connect method. The await keyword is used because the connection is an asynchronous operation that might take some time to complete.
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db connected')
    } catch (error){
        console.log('DB Connection Error');
    }
}

//This exports the db function from this module, allowing it to be imported and used in other parts of the application. It follows the Node.js module pattern, enabling modularity and reusability.
module.exports = {db}