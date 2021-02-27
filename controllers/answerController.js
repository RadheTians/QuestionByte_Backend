const Answer = require('./../models/answerModel');
const catchAsync = require('./../utils/catchAsync');

exports.answerQuestion = catchAsync(async (req, res, next) => {

    const answer = await Answer.create(req.body);
    if (answer) {
        res.status(200).json({
            status: 'success',
            data: answer 
        });
    } else {
        res.status(200).send({ 
            status: 'fail',
            message: 'Invalid Answer Data.'
         });
    }
});


exports.getAnswersToQuestion = catchAsync(async (req, res, next) => {

    console.log(req.body)
    const question = await Question.find({ questionId: req.body.id });
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

