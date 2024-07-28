/**
 * router
 */

const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

//전체조회
router.get("/", (req, res) => {
    mysql.query("boardList")
        .then(result => {
            res.send(result);
        });
});

//단건조회
router.get("/:seq", (req, res) => {
    const seq = req.params.seq;

    mysql.query("boardGet", {seq})
        .then(result => {
            res.send(result);
        });
})

//등록
router.post("/", (req, res) => {
    //seq, title 필수
    mysql.query("boardInsert", req.body)
        .then(result => {
            res.send(result);
        })
})

//수정
router.put("/:seq", (req, res) => {
    const seq = req.params.seq;

    mysql.query("boardUpdate", [req.body, {seq}])
        .then(result => {
            res.send(result);
        });
});

//삭제
router.delete("/:seq", (req, res) => {
    const seq = req.params.seq;

    mysql.query("boardDelete", {seq})
        .then(result => {
            res.send(result);
        });
});

module.exports = router;