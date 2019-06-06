require('../../config.js');

const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

function getChatList(userId) {
  sql =`
    SELECT * FROM chatlists WHERE id = $1
  `
  return db.any(sql, userId);
}

function updateChatList(roomkey, text, updated) {
  sql = `
    UPDATE chatlists
    SET text = $<text>, updated = $<updated>
    WHERE roomkey = $<roomkey>
  `
  return db.any(sql, {text, updated, roomkey});
}

module.exports = {
  getChatList,
  updateChatList
}