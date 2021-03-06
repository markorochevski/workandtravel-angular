"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    _id: String,
    route_name: String,
    agency: String,
    employer: String,
    content: String,
    wage: String,
    avg_hours: String,
    year: String,
    profile_link: String,
    profile_link_public: String,
    profile_link_path: String,
    is_approved: String
});
exports.Post = mongoose.model('Post', PostSchema);
//# sourceMappingURL=post.js.map