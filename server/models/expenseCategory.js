const mongoose = require('mongoose')

const expenseCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, default: undefined
    }
})


mongoose.model('ExpenseCategory', expenseCategorySchema);