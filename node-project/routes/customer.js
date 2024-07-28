const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

//전체조회  http://localhost/customer
router.get("/", (req, res) => {
    //쿼리 실행
    mysql.query("customerList")
        .then(result => {res.send(result)});
});

//단건조회
router.get("/:id", (req, res) => {
    //쿼리 실행
    let id = req.params.id;
    
    mysql.query("customerGet", {id})
        .then(result => {res.send(result)});
});

//등록
router.post("/", (req, res) => {
    //쿼리
    
    mysql.query("customerInsert", req.body)
        .then(result => {res.send(result)});
});

//수정
router.put("/:id", (req, res) => {
    //쿼리 실행
    let id = req.params.id;

    mysql.query("customerUpdate", [req.body, {id}])
        .then(result => {res.send(result)});
});

//삭제
router.delete("/:id", (req, res) => {
    //쿼리 실행
    let id = req.params.id;
    
    mysql.query("customerDelete", {id})
        .then(result => {res.send(result)});
});



module.exports = router;