const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../model/auth.js');
const post = require('../model/posts.js');
const collect = require('../model/collect.js');
const router = express.Router();

router.use(bodyParser.json());

router.post('/posts/collect', (req, res) => {
    const {userid,title, category, by_hour, price, experience, detail, id} = req.body
    console.log('backend',id);
    collect.addCollect(userid,title, category, by_hour, price, experience, detail, id)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
});


router.post('/collect/user', (req, res) => {
  console.log('backend enter');
    const userid = req.body.userid
    console.log(req.body);
    collect.getAllCollects(userid)
    .then((result) => {
        res.json(result);
    });
});
router.post('/collect/delete', (req, res) => {
    const {userid,postid} = req.body
    collect.deleteCollect(userid, postid)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
});
module.exports = router;
