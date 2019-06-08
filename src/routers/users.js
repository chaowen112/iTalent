const express = require('express');
const bodyParser = require('body-parser');

const users = require('../model/users.js');

const router = express.Router();

router.use(bodyParser.json());

router.get('/user/data', (req, res, next) => {
    const {id, name} = req.query;
    users.getUserData(id, name)
    .then(result => res.json(result))
    .catch(e => next(e));
});

module.exports = router;