const mysql = require("mysql2");
const boardSql = require("./board");

const sql = {...boardSql};

const connInfo = {
    host : "127.0.0.1",
    port : "3306",
    user : "hr",
    password : "hr",
    database : "shop",
    connectionLimit : 10,
};

let pool = mysql.createPool(connInfo);

function query(key, data) {
    return new Promise((resolve, rejact) => {
        pool.query(sql[key], data, (err, results) => {
            if(err) {
                rejact(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {pool, query};