//const pool = require("./pool_promise");
const mysql = require("./pool_promise");

//쿼리 실행
let sql = "select * from customer";
/*
pool.query(sql, (err, results) => {
    if(err) {
        console.log(err)
    }

    console.log(results);
});
*/

mysql.query(sql)
    .then(result => {console.log(result)});