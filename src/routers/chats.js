const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../model/auth.js');
const chat = require('../model/chats.js');

const router = express.Router();

router.use(bodyParser.json());

router.post('/chats', (req, res, next) => {
  const roomkey = req.body.roomkey;
  chat.getChat(roomkey)
    .then((result) => {
      res.json(result);
    }).catch(next);
});

router.post('/chats/new', (req, res) => {
  const {owner, text, updated, roomkey} = req.body;
  chat.create(owner, text, updated, roomkey)
  .then((result) => {
      res.json('success');
  })
  .catch(e => {
      console.log(e);
  });  
})

module.exports = router;