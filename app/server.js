const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('../config/config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(config.url, (err) => {
    if (err) {
        return console.log(err);
    }
    require('./routes')(app);
    app.listen(config, () => {
        console.log('We are live on ' + config.port);
    });
});