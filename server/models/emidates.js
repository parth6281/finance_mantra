const mongoose = require('mongoose');

const emiDatesSchema = new mongoose.Schema({
    emi_id: {
        type: String
    },
    emi_name: {
        type: String
    },
    emi_amount: {
        type: Number
    },
    emi_due_day: {
        type: Number
    },
    is_active: {
        type: Boolean
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

mongoose.model('EmiDates', emiDatesSchema);