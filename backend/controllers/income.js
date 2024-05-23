const IncomeSchema = require("../models/incomeModel")

//exports the addIncome function, making it available outside of this module.
exports.addIncome = async (req,res) => {
    const {title,amount,category,description,date} = req.body //getting the info from the client to add 
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    //adding the client data to database
    try{
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount == 'number'){
            return res.status(400).json({message: 'Amount must be a positive number'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    }catch(error){
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getIncomes = async (req,res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt : -1}) //more recent income at top
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message : 'Server Error'})
        
    }
}

exports.deleteIncome = async (req,res) => {
    const{id} = req.params;
    console.log(req.params) //req.params is the id of the income we want to delete
    IncomeSchema.findByIdAndDelete(id).then((income)=>{
        res.status(200).json({message : 'Income Deleted'})
    })
    .catch((err)=>{
        res.status(500).json({message : 'Server Error'})
    })
}