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
    const userId = req.body.userId;
    question.votes.forEach(element => {
        if(userId === element){
            res.status(400).send({ 
                status: 'fail',
                message: 'You have already voted!!!'
             });
        }
    });
    question.votes.push(userId);
    await question.save();
    res.status(200).json({
        status: 'success',
        data: 'Your vote has been saved.'
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

