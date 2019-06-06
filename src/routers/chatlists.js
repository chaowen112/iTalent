const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../model/auth.js');
const chatlist = require('../model/chatlists.js');

const router = express.Router();

router.use(bodyParser.json());

router.post('/chatlists', (req, res, next) => {
  const userId = req.body.userId;
  chatlist.getChatList(userId)
  .then((result) => {
    res.json(result);
  }).catch(next);
});

router.post('/chatlists/update', (req, res, next) => {
  const {roomkey, text, updated} = req.body;
  chatlist.updateChatList(roomkey, text, updated)
  .then((result) => {
    res.json(result);
  }).catch(next);
});

module.exports = router;