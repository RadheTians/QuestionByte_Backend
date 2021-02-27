const express = require('express');
const authController = require('./../controllers/authController');
const questionController = require('./../controllers/questionController');
const answerController = require('./../controllers/answerController');

const router = express.Router();

// user routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// question routes
router.get('/allquestions', questionController.getAllQuestions);
router.post('/askquestion', questionController.askQuestion);

// answer routes
router.post('/answersofquestion', answerController.getAnswersToQuestion);
router.post('/answertoquestion', answerController.answerQuestion);

module.exports = router;