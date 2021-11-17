const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    about: String,
    image: String
});

mongoose.model('member', memberSchema);