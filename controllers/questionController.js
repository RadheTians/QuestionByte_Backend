const Question = require('./../models/questionModel');
const catchAsync = require('./../utils/catchAsync');

exports.askQuestion = catchAsync(async (req, res, next) => {

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

exports.upAndDownVoteQuestion = catchAsync(async (req, res, next) => {

    const question = await Question.findById(req.body.id);
    question.voteCount = question.voteCount + req.body.vote;
    question.votes.push(req.body.userId);
    await question.save();
    res.status(200).json({
        status: 'success',
        data: 'Your vote has been recorded.'
    });
    
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

