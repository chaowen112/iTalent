require('../../config.js');

const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

function getChat(roomkey) {
  sql = `
    SELECT * FROM chats WHERE roomkey = $1
  `
  return db.any(sql, roomkey);
}

function create(owner, text, updated, roomkey) {
    sql = `
        INSERT INTO chats(owner, text, updated, roomkey)
        VALUES ($<owner>, $<text>, $<updated>, $<roomkey>)
    `;
    return db.any(sql, {owner, text, updated, roomkey});
}

module.exports = {
  getChat,
  create
}