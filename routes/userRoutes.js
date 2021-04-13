const express = require('express');
const authController = require('./../controllers/authController');
const questionController = require('./../controllers/questionController');
const answerController = require('./../controllers/answerController');
const userController = require('./../controllers/userController');
const tagController = require('./../controllers/tagController');

const router = express.Router();


// user routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/getuser', authController.getUser);
router.put('/updateuser', authController.updateUser);

//all user routes
router.get('/allusers', userController.getAllUsers);

// question routes
router.get('/allquestions', questionController.getAllQuestions);
router.post('/askquestion', questionController.askQuestion);
router.post('/updownvotequestion', questionController.upAndDownVoteQuestion);


// answer routes
router.get('/answersofquestion', answerController.getAnswersToQuestion);
router.post('/answertoquestion', answerController.answerQuestion);

// tag routes
router.get('/alltags', tagController.getAllTags);
router.post('/createtag', tagController.createTag);

module.exports = router;
