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
    //console.log(req.body,':hot')
    //userId = req.body.userId;
    post.getHot()
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

router.post('/post/money', (req, res) => {
    const {userid,money} = req.body;
    console.log(req.body);
    post.postMoney(userid,money)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
})

router.post('/posts/view', (req, res) => {
    const {postId} = req.body;
    post.addView(postId)
    .then((result) => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
    });
});

router.get('/post/detail', (req, res) => {
    const{id} = req.query;
    post.getDetail(id)
    .then((result) => {
        res.json(result);
    })
    .catch(e => {
        console.log(e);
    })
});

router.get('/posts/user', (req, res) => {
    const{id} = req.query;
    post.getAll(id)
    .then(result => {
        res.json(result);
    })
    .catch(e => {
        console.log(e);
    })
});

router.get('/post/available', (req, res) => {
    const{id, date} = req.query;
    post.available(id, date)
    .then(result => {
        res.json(result);
    })
    .catch(e => {
        console.log(e);
    })
});

router.post('/contract/new', (req, res) => {
    const{orderId, time, orderer, artist, postId, date} = req.body;
    post.newContract(orderId, time, orderer, postId, date, artist)
    .then(result => {
        res.json('success');
    })
    .catch(e => {
        console.log(e);
        res.json('fail');
    })
})

module.exports = router;
