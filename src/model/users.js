require('../../config.js');

const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

function getUserData(id, name){
    select = `
        SELECT * FROM users WHERE id = $<id>;
    `;
    insert = `
        INSERT INTO users (id, name, photo) VALUES ($<id>, $<name>, 'images/guitar.jpg');
    `
    return db.any(select, {id})
    .then(r => {
        if(r.length > 0) return db.any(select, {id})
        else return db.any(insert, {id, name})
        .then(r => {
            return db.any(select, {id});
        })
        .catch(e => {console.log(e)});
    })
    .catch(e => {console.log(e)});
}

function uploadPhoto(id, photo){
    console.log(photo)
    sql = `
        UPDATE users
        SET photo = $<name>
        WHERE id = $<id>;
    `
    let name = photo.name
    fs.writeFile('dist/images/'+name, photo.data, (e) => {console.log(e)});
    return db.any(sql, {id, name});
}

function uploadDescription(id, text){
    sql =  `
        UPDATE users
        SET description = $<text>
        WHERE id = $<id>
    `
    return db.any(sql, {id, text});
}

module.exports = {
    getUserData,
    uploadPhoto,
    uploadDescription
}