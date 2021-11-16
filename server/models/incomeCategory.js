const mongoose = require('mongoose')

const incomeCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, default: undefined
    }
})


mongoose.model('IncomeCategory', incomeCategorySchema);