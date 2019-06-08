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
        UPDATE users 
        SET money = (SELECT money FROM users WHERE id = $<userid>)+$<money>
        WHERE id = $<userid>
    `;
    console.log(userid, money)
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
        SELECT * from posts where id = $<id>;
    `
    return db.any(sql, {id});
}

function getAll(id){
    sql = `
        SELECT (id) from posts where userId = $<id>;
    `

    return db.any(sql, {id});
}

function available(id, date){
    sql = `
        SELECT (time) FROM contracts
        WHERE artist = $<id> AND date = $<date>;
    `
    return db.any(sql, {id, date});
}

function newContract(orderId, time, orderer, postId, date, artist){
    sql = `
        INSERT INTO contracts (id, orderer, artist, postid, date, time)
        VALUES ($<orderId>, $<orderer>, $<artist>, $<postId>, $<date>, $<it>);
    `
    //return db.any(sql, {orderId, orderer, artist, postId, date, it:1});
    time.forEach((t, it) => {
        console.log(orderId, orderer, artist, postId, date, it);
        if(t)
            db.any(sql, {orderId, orderer, artist, postId, date, it});
    });
    return db.any(`SELECT id FROM contracts WHERE id = 'a';`)
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
    getDetail,
    getAll,
    available,
    newContract
};
