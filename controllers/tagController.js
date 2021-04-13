const Tag = require('./../models/tagModel');
const catchAsync = require('./../utils/catchAsync');

exports.createTag = catchAsync(async (req, res, next) => {

    const tag = await Tag.create(req.body);
    if (tag) {
        res.status(200).json({
            status: 'success',
            data: tag
        });
    } else {
        res.status(200).send({ 
            status: 'fail',
            message: 'Invalid Tag Data.'
         });
    }
});


exports.getAllTags = catchAsync(async (req, res, next) => {


    const tags = await Tag.find();
    if (tags) {
        res.status(200).json({
            status: 'success',
            data: tags
        });
    } else {
        res.status(200).send({ 
            status: 'fail',
            message: 'Invalid Tag Data.'
         });
    }
});

