require('../../config.js');

const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

//新增收藏
function addCollect(userid,title, category, by_hour, price, experience, detail, youtubeid){
    //.log(title);
    sql = `
        INSERT INTO collects (userid,title, category, by_hour, price, experience, detail, youtubeId)
        VALUES ($<userid>,$<title>, $<category>, $<by_hour>, $<price>, $<experience>, $<detail>, $<youtubeid>)
    `;
    return db.any(sql, {userid,title, category, by_hour, price, experience, detail, youtubeid});
}

//得到目前的收藏
function getAllCollects(){
  sql = `
      SELECT * FROM collects;
  `;
  return db.any(sql);
}

module.exports = {
    addCollect,
    getAllCollects
};
