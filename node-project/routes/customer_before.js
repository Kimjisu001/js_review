const express = require("express");
const router = express.Router();

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


//전체조회  http://localhost/customer
router.get("/", (req, res) => {
    //db 커넥션 생성
    let conn = mysql.createConnection(connInfo);

    //쿼리 실행
    let sql = "select * from customer";
    conn.query(sql, (err, results) => {
        if(err) {
            console.log(err)
        }

        res.send(results);
    });

    //db접속종료 (비동기이지만 sql이 모두 실행되면 종료)
    conn.end();
});

//단건조회
router.get("/:id", (req, res) => {
    //db 커넥션 생성
    let conn = mysql.createConnection(connInfo);

    //쿼리 실행
    let id = req.params.id;
    let sql = "select * from customer where ?";
    conn.query(sql, {id}, (err, results) => {
        if(err) {
            console.log(err)
        }

        res.send(results);
    });
    
    //db접속종료 (비동기이지만 sql이 모두 실행되면 종료)
    conn.end();
});

//등록
router.post("/", (req, res) => {
    let conn = mysql.createConnection(connInfo);

    //쿼리
    let sql = `insert into customer set ?`;
    conn.query(sql, req.body, (err, results) => {
        if(err) {
            console.log(err);
        }

        if(results.affectedRows == 1) {
            res.send("success Insert!!");
        } else {
            res.send("fail Insert...");
        }
    })

    conn.end();

});

//수정
router.put("/:id", (req, res) => {
    //db 커넥션 생성
    let conn = mysql.createConnection(connInfo);
    
    //쿼리 실행
    let id = req.params.id;
    let sql = "update customer set ? where ?";
    conn.query(sql, [req.body, {id}], (err, results) => {
        if(err) {
            console.log(err)
        }

        if(results.affectedRows == 1) {
            res.send("success update!");
        } else {
            res.send("fail update...");
        }
    });
    
    //db접속종료 (비동기이지만 sql이 모두 실행되면 종료)
    conn.end();
});

//삭제
router.delete("/:id", (req, res) => {
    //db 커넥션 생성
    let conn = mysql.createConnection(connInfo);
    
    //쿼리 실행
    let id = req.params.id;
    let sql = "delete from customer where ?";
    conn.query(sql, {id}, (err, results) => {
        if(err) {
            console.log(err)
        }

        if(results.affectedRows == 1) {
            res.send("success delete!");
        } else {
            res.send("fail delete...");
        }
    });
    
    //db접속종료 (비동기이지만 sql이 모두 실행되면 종료)
    conn.end();
});



module.exports = router;