require('../../config.js');

const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

function getUserData(id){
    select = `
        SELECT * FROM users WHERE id = $<id>;
    `;
    insert = `
        INSERT INTO users (id) VALUES ($<id>);
    `
    return db.any(select, {id})
    .then(r => {
        if(r.length > 0) return db.any(select, {id})
        else return db.any(insert, {id})
        .then(r => {
            return db.any(select, {id});
        })
        .catch(e => {console.log(e)});
    })
    .catch(e => {console.log(e)});
}

module.exports = {
    getUserData
}