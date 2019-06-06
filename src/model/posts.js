require('../../config.js');

const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

function getAllPosts(){
    sql = `
        SELECT * FROM posts;
    `;
    return db.any(sql);
}

function getRecommend(userId){
    sql = `SELECT * FROM history`;
    return db.any(sql);
}

function getHot(){
    sql = `
        SELECT * FROM posts ORDER BY views LIMIT 10
    `;
    return db.any(sql);
}

function getLatest(){
    sql = `
        SELECT * FROM posts ORDER BY ts DESC LIMIT 10
    `;
    return db.any(sql);
}

function create(userid,title, category, by_hour, price, experience, detail, youtubeid){
  console.log('enter create');
    console.log(title);
    sql = `
        INSERT INTO posts (userid,title, category, by_hour, price, experience, detail, youtubeId)
        VALUES ($<userid>,$<title>, $<category>, $<by_hour>, $<price>, $<experience>, $<detail>, $<youtubeid>)
    `;
    return db.any(sql, {userid,title, category, by_hour, price, experience, detail, youtubeid});
}
function addCollect(title, category, by_hour, price, experience, detail, id){
    console.log(title);
    sql = `
        INSERT INTO collects (title, category, by_hour, price, experience, detail, youtubeId)
        VALUES ($<title>, $<category>, $<by_hour>, $<price>, $<experience>, $<detail>, $<id>)
    `;
    return db.any(sql, {title, category, by_hour, price, experience, detail, id});
}

function addView(postId){
    console.log(postId);
    sql = `
        UPDATE posts
        SET views = (SELECT views FROM posts WHERE id = $<postId>)+1 WHERE id = $<postId>;
    `
    return db.any(sql, {postId});
}

module.exports = {
    getAllPosts,
    getRecommend,
    getHot,
    getLatest,
    create,
    addView,
    addCollect
};
