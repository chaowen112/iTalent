const fs = require('fs');
const uuid = require('uuid/v4');
const moment = require('moment');

function login(username, passwd){
    return new Promise((resolve, reject) => {
        if(username === 'chao' && passwd ==='123456'){
            resolve('success');
        }
        else {
            let err = new Error('fail');
            err.status = 403;
            reject(err);
        }
    });
}

module.exports = {
    login
};