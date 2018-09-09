"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
    _id: String,
    title: String,
    content: String
});
exports.Question = mongoose.model('Question', QuestionSchema);
//# sourceMappingURL=question.js.map