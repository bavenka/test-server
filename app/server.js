import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from '../config/config';
import userRoute from './routes/userRoute';
import filmRoute from './routes/filmRoute';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', userRoute, filmRoute);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({error: 'invalid token'});
    } else if (err.name === 'ValidationError') {
        res.status(err.status).json({error: err.statusText});
    } else if (err.name === 'ForbiddenError') {
        res.status(err.status).json({error: 'Forbidden'});
    } else if (err.name === 'MongoError') {
        const pattern = /E11000.*:.*\.(\w*)s .*: (.*)_.*/g;
        const regexp = new RegExp(pattern);
        const result = regexp.exec(err.message);
        res.status(409).json({error: `${result[2]}`});
    } else {
        res.status(400).json({error: 'Bad request'});
    }
});

mongoose.connect(config.url, (err) => {
    if (err) {
        return console.log(err);
    }
    app.listen(config, () => {
        console.log('We are live on ' + config.port);
    });
});