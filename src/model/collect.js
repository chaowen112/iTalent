require('../../config.js');

const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

//新增收藏
function addCollect(userid,title, category, by_hour, price, experience, detail, id){
    //.log(title);
    sql = `
        INSERT INTO collects (userid,title, category, by_hour, price, experience, detail, Id)
        VALUES ($<userid>,$<title>, $<category>, $<by_hour>, $<price>, $<experience>, $<detail>, $<id>)
    `;
    return db.any(sql, {userid,title, category, by_hour, price, experience, detail, id});
}
function deleteCollect(userid,postid)
{
  sql = `
      delete  from collects where (id=$<postid> and userid=$<userid>);
  `;
  return db.any(sql,{userid,postid});
}
//得到目前的收藏
function getAllCollects(userid){
  console.log(typeof(userid));

  sql = `
      select * from collects WHERE userid = $<userid>;
  `;
  return db.any(sql,{userid});
}

module.exports = {
    addCollect,
    getAllCollects,
    deleteCollect
};
