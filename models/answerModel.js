const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    questionId :{
        type: String,
        required: true,
    },
    userId :{
        type: String,
        required: true
    },
    userGender :{
        type: String,
        required: true
    },
    userName :{
        type: String,
        required: true
    },
    answer: { 
        type: String, 
        required: true,
        unique: true
    },
    answeredTime: {
        type: Date,
        default: Date.now
    },
    
});

module.exports = mongoose.model('Answer', answerSchema);

