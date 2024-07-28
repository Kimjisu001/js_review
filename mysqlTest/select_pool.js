//mysql 모듈 로드
const mysql = require("mysql2");

//mysql 접속 정보
const connInfo = {
    host : "127.0.0.1",
    port : "3306",
    user : "hr",
    password : "hr",
    database : "shop",
    connectionLimit: 10,
};

//db 커넥션 생성
let pool = mysql.createPool(connInfo);
pool.getConnection((err, conn) => {
    if(err) {
        console.log("Connect Err >> " + err.stack)
    }

    //쿼리 실행
    let sql = "select * from customer";
    conn.query(sql, (err, results) => {
        if(err) {
            console.log(err)
        }
    
        console.log(results);
    });
    
    //db접속종료 (비동기이지만 sql이 모두 실행되면 종료)
    conn.release();

});
