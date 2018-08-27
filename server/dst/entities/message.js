"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    message: String
});
exports.Message = mongoose.model('Message', MessageSchema);
//# sourceMappingURL=message.js.map