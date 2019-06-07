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

function getRecommend(){
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
    //console.log(title);
    sql = `
        INSERT INTO posts (userid,title, category, by_hour, price, experience, detail, youtubeId)
        VALUES ($<userid>,$<title>, $<category>, $<by_hour>, $<price>, $<experience>, $<detail>, $<youtubeid>)
    `;
    return db.any(sql, {userid,title, category, by_hour, price, experience, detail, youtubeid});
}
//新增收藏
function addCollect(userid,title, category, by_hour, price, experience, detail, youtubeid){
    //.log(title);
    sql = `
        INSERT INTO collects (userid,title, category, by_hour, price, experience, detail, youtubeId)
        VALUES ($<userid>,$<title>, $<category>, $<by_hour>, $<price>, $<experience>, $<detail>, $<youtubeid>)
    `;
    return db.any(sql, {userid,title, category, by_hour, price, experience, detail, youtubeid});
}
//得到目前這個帳號的餘額
function postMoney(userid,money)
{
    sql = `
        INSERT INTO users (id,money)
        VALUES ($<userid>,$<money>)
    `;
    return db.any(sql, {userid,money});
}
function getMoney(userId)
{
  //console.log(userId,'backend get money 2');
  //console.log(typeof(userId));
  sql = `
      SELECT money FROM users WHERE id = $<userId>;

  `;
  return db.any(sql,{userId});
}
function addView(postId){
    console.log(postId);
    sql = `
        UPDATE posts
        SET views = (SELECT views FROM posts WHERE id = $<postId>)+1 WHERE id = $<postId>;
    `
    return db.any(sql, {postId});
}

function getDetail(id){
    sql = `
        SELECT (title, category, ts, by_hour, price, experience, detail, youtubeId, views) from posts where id = $<id>;
    `
    return db.any(sql, {id});
}

module.exports = {
    getAllPosts,
    getRecommend,
    getHot,
    getLatest,
    create,
    addView,
    addCollect,
    postMoney,
    getMoney,
    getDetail
};
