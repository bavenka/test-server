import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from '../config/config';
import userRoute from './routes/userRoute'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',userRoute);

app.use((err, req, res) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).end('invalid token');
    } else if (err.name === 'ValidationError') {
        res.status(err.status).end(err.statusText);
    } else if (err.name === 'ForbiddenError') {
        res.status(err.status).end('Forbidden');
    } else if (err.name === 'MongoError') {
        const pattern = /E11000.*:.*\.(\w*)s .*: (.*)_.*/g;
        const regexp = new RegExp(pattern);
        const result = regexp.exec(err.message);
        res.status(409).end(`'${result[1]}' with such field '${result[2]}' already exists`);
    } else {
        console.log(err.name, err.message);
        res.status(400).end('Bad request');
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