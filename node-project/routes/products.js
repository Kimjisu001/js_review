const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool");

//전체조회 ?category ?price
router.get("/", (req, res) => {

    mysql.query("productList")
        .then(result => {
        res.send(result);
    });
});

//단건조회 /1
router.get("/:cate", (req, res) => {
    let cate = req.params.cate;

    mysql.query("productGet", {cate})
        .then(result => {
        res.send(result);
    });
});

//등록 (JSON) prodid, name, price
router.post("/", (req, res) => {

    mysql.query("productInsert", req.body)
    .then(result => {
        res.send(result);
    });
});

//수정 (JSON) prodname, price
router.put("/:prodno", (req, res) => {
    let prodno = req.params.prodno;
    
    mysql.query("productUpdate", [req.body, {prodno}])
        .then(result => {
        res.send(result);
    });
});

//삭제
router.delete("/:prodno", (req, res) => {
    let prodno = req.params.prodno;
    
    mysql.query("productDelete", {prodno})
        .then(result => {
        res.send(result);
    });
});

module.exports = router;