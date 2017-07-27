import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from '../config/config';
import userRoute from './routes/userRoute'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',userRoute);

mongoose.connect(config.url, (err) => {
    if (err) {
        return console.log(err);
    }
    app.listen(config, () => {
        console.log('We are live on ' + config.port);
    });
});