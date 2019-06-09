const express = require('express');
const bodyParser = require('body-parser');
var fileupload = require("express-fileupload");

const users = require('../model/users.js');

const router = express.Router();

router.use(bodyParser.json());
router.use(fileupload());

router.get('/user/data', (req, res, next) => {
    const {id, name} = req.query;
    users.getUserData(id, name)
    .then(result => res.json(result))
    .catch(e => next(e));
});

router.post('/user/photo', (req, res, next) => {
    const id = req.body.id;
    const photo = req.files.photo
    users.uploadPhoto(id, photo)
    .then(result => res.json(result))
    .catch(e => next(e));
})

module.exports = router;