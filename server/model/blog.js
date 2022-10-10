const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }  ,
    photo: {
        type: String,
        required: false
    } 
    
})
const BlogModel = mongoose.model('blogs',BlogSchema);
module.exports = BlogModel;