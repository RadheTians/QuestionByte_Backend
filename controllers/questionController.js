const Question = require('./../models/questionModel');
const catchAsync = require('./../utils/catchAsync');

exports.askQuestion = catchAsync(async (req, res, next) => {

    console.log(req.body);
    const question = await Question.create(req.body);
    if (question) {
        res.status(200).json({
            status: 'success',
            data: question 
        });
    } else {
        res.status(200).send({ 
            status: 'fail',
            message: 'Invalid Question Data.'
         });
    }
});


exports.getAllQuestions = catchAsync(async (req, res, next) => {

    const question = await Question.find();
    if (question) {
        res.status(200).json({
            status: 'success',
            data: question 
        });
    } else {
        res.status(200).send({ 
            status: 'fail',
            message: 'Invalid Question Data.'
         });
    }
});

