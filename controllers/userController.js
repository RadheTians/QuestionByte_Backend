const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {

    const question = await User.find();
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

