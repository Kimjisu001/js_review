const conn = require("./pool_promise");

//2. 쿼리 실행
const name = "예담전문학교";
const email = "yedam@y.co";
const phone = "010-1234-5678";
let sql = `insert into customer(name, email, phone) values('${name}', '${email}', '${phone}')`;
conn.query(sql, (err, results) => {
    if(err) {
        console.log(err)
    }

    console.log(results.affectedRows);
    console.log(results.insertId);
});
