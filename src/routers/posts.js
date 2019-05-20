const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../model/auth.js');

const router = express.Router();

router.use(bodyParser.json());

router.get('/login', (req, res) => {
    console.log('login');
    if(!req.query.username || !req.query.passwd){
        let err = new Error('name and password required');
        err.status = 403;
        throw err;
    }
    auth.login(req.query.username, req.query.passwd).then((result) => {
        res.json(result);
    });
});

module.exports = router;