const postUser = require('../services/user');

module.exports = function (app) {
    app.post('/', (req, res) => {
        postUser(req.body.username, req.body.email, req.body.password).then(
            user => {
                res.sendStatus(201);
            }
        ).catch(err => {
            res.status(409).send(err);
        })
    });
};