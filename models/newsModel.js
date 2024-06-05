// Import mongoose
const mongoose = require('mongoose');

// Định nghĩa Schema
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Tạo mô hình từ Schema
const News = mongoose.model('News', newsSchema);

module.exports = News;
