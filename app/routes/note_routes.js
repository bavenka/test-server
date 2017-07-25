module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        const note = { text: req.body.title, title: req.body.text };
        db.collection('notes').insert(note,(err) => {
            if(err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.sendStatus(201);
        })
    });
};