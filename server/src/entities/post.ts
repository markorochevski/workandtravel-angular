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
    profile_link: String
});

export let Post = mongoose.model('Post', PostSchema);








