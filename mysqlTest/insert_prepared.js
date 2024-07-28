//mysql 모듈 로드
const mysql = require("mysql2");

//mysql 접속 정보
const connInfo = {
    host : "127.0.0.1",
    port : "3306",
    user : "hr",
    password : "hr",
    database : "shop",
};

//db 커넥션 생성
let conn = mysql.createConnection(connInfo);
//let conn = mysql.createConnection("mysql://hr:hr@localhost:3306/shop");

//1. db접속 체크 (생략가능)
conn.connect((err) => {
    if(err) {
        console.log("error connection >> " + err.stack);
        return;
    }
});

//2. 쿼리 실행
const name = "예담직업전문학교";
const email = "yedam@y.co";
const phone = "010-7777-9999";
//let sql = `insert into customer(name, email, phone) values(?, ?, ?)`;
let sql = `insert into customer set ?`; //name=?, email=?, phone=?
conn.query(sql, {name, email, phone} , (err, results) => {
    if(err) {
        console.log(err)
    }

    console.log(results.affectedRows);
    console.log(results.insertId);
});

//3. db접속종료 (비동기이지만 sql이 모두 실행되면 종료)
conn.end();