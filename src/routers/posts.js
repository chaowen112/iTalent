const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../model/auth.js');
const post = require('../model/posts.js');

const router = express.Router();

router.use(bodyParser.json());

router.get('/posts/all', (req, res) => {
    post.getAllPosts()
    .then((result) => {
        res.json(result);
    });
});

router.get('/posts/recommend', (req, res) => {
    post.getRecommend()
    .then((result) => {
        res.json(result);
    })
    .catch(e => {
        console.log(e);
    });
});

router.get('/posts/hot', (req, res) => {
    userId = req.body.userId;
    post.getHot(userId)
    .then((result) => {
        res.json(result);
    });
});

router.get('/posts/latest', (req, res) => {
    post.getLatest()
    .then((result) => {
        res.json(result);
    }).catch(e => {
        console.log(e);
    });
});

router.post('/posts/new', (req, res) => {
    const {userid,title, category, by_hour, price, experience, detail, id} = req.body
    console.log('router posts');
    console.log(req.body);
    post.create(userid,title, category, by_hour, price, experience, detail, id)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
});
router.post('/posts/collect', (req, res) => {
    const {title, category, by_hour, price, experience, detail, id} = req.body
    post.create(title, category, by_hour, price, experience, detail, id)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
});
router.post('/posts/view/add', (req, res) => {
    console.log(req.body)
    const {postId} = req.body;
    post.addView(postId)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
});

module.exports = router;
