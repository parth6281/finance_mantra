const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    dateOfExpense: {
        type: Number
    },
    paymentMethod: {
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        default: undefined
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        default: undefined
    }
})

mongoose.model('Expense', expenseSchema);