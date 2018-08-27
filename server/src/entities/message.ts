const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    message: String
});

export let Message = mongoose.model('Message', MessageSchema);








