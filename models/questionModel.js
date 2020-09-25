const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    askedUserId :{
        type: String,
        required: true,
    },
    askedUserName :{
        type: String,
        required: true
    },
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    description: {
        type: String, 
        required: true,
        unique: true
    },
    askedTime: {
        type: Date,
        default: Date.now
    },
    answers: {
        type: [String],
        default: []
    },
    votes: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        required: true
    }
});
const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;
