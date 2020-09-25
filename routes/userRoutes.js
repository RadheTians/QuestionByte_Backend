const express = require('express');
const authController = require('./../controllers/authController');
const questionController = require('./../controllers/questionController');


const router = express.Router();

// user routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// question routes
router.get('/allquestions', questionController.getAllQuestions);
router.post('/askquestion', questionController.askQuestion);

module.exports = router;