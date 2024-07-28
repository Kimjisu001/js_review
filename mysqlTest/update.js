const conn = require("./pool_promise")

//2. 쿼리 실행
const id = "8";
const email = "z@z.z";
const addr = "대구광역시";

let sql = `update customer 
            set email = '${email}', address = '${addr}'
            where id = ${id}`;
conn.query(sql, (err, results) => {
    if(err) {
        console.log(err)
    }

    console.log(results);
    if(results.affectedRows == 1) {
        console.log("success update!");
    } else {
        console.log("fail update...");
    }
});
