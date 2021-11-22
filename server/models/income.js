const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    dateOfIncome: {
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

mongoose.model('Income', incomeSchema);

