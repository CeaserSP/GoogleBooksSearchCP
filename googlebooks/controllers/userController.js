const User = require('../models/users');
const bodyParser = require('body-parser');

const userCon = {
    authenticate(req, res, next) {
        User.findOne(
            { username: req.body.username },
            function (err, user) {
                if (err) throw err;
                if (user) {
                    user.comparePassword(req.body.password, function (err, isMatch) {
                        if (err) throw err;
                        res.json(user);
                    });
                } else {
                    res.status(404).send('Invalid info')
                }
            });
    },
};