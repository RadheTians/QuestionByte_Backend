const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    tag :{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String, 
        required: true,
        unique: true
    },
    time: {
        type: Date,
        default: Date.now
    },
});
const questionModel = mongoose.model('Tag', tagSchema);

module.exports = questionModel;
