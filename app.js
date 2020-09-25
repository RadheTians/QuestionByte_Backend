const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/userRoutes');
const errorController = require('./controllers/errorController');
const ErrorUtil = require('./utils/ErrorUtil');

const app = express();

//middleware


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());


//routes
app.use('/api/users/', userRoute);

app.all('*', (req, res, next) => {
    const err = new ErrorUtil(`Unabale to find ${req.originalUrl}`, 404);

    next(err);

});
app.use(errorController);

module.exports = app;