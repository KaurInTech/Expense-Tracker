const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense');

//creates a new router instance from the Express.js framework. It allows you to define a set of routes independent from the main application instance.
const router = require('express').Router()

//POST requests are generally used to create new resources or submit data, as opposed to GET requests, which retrieve data.
router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router