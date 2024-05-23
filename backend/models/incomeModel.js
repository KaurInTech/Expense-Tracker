const mongoose = require('mongoose');

//A Mongoose schema defines the structure of documents stored in a MongoDB collection. 
//It specifies the fields, data types, and validation rules for those fields.

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        trim : true,
        maxLength : 50,
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type : {
        type : String,
        default : "income"
    },
    date : {
        type : Date,
        required : true,
        trim : true
    },
    category :{
        type : String,
        required : true,
        trim : true
    },
    description :{
        type : String,
        required : true,
        maxLength : 20,
        trim : true
    }
}, {timestamps:true} // By setting {timestamps: true}, Mongoose automatically adds createdAt and updatedAt fields to the schema. These fields track when the document was created and last updated.
)

//By exporting the model, it can be imported and used in other parts of the application to create, read, update, and delete income records in MongoDB.
module.exports = mongoose.model('Income', IncomeSchema) //This line creates a Mongoose model named 'Income' using the defined IncomeSchema. A model represents a collection in MongoDB, providing methods to interact with the database.