const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    _id: String,
    title: String,
    content: String
});

export let Question = mongoose.model('Question', QuestionSchema);







