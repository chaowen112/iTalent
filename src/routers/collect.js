const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../model/auth.js');
const post = require('../model/posts.js');
const collect = require('../model/collect.js');
const router = express.Router();

router.use(bodyParser.json());

router.post('/posts/collect', (req, res) => {
    const {userid,title, category, by_hour, price, experience, detail, id} = req.body
    collect.addCollect(userid,title, category, by_hour, price, experience, detail, id)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
});

router.get('/collect/all', (req, res) => {
    collect.getAllCollects()
    .then((result) => {
        res.json(result);
    });
});
module.exports = router;
