const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool");

//전체조회 /board?page=1 =>(page-1)*10 -->0, 2-->10
router.get("/", async (req, res) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  let offset = (page - 1) * 10;
  let result = await mysql.query("boardList", offset);
  let total = await mysql.query("boardCount");
  res.send({ result, total: total[0].cnt });
});

//단건조회    req.params.id
router.get("/:id", async function (req, res) {
  let result = await mysql.query("boardInfo", req.params.id);
  res.send(result);
});

//등록   req.body
router.post("/", async function (req, res) {
  let result = await mysql.query("boardInsert", req.body);
  res.send(result);
});

//수정   req.body, req.params.id
router.put("/:id", async function (req, res) {
  let result = await mysql.query("boardUpdate", [req.body, req.params.id]);
  res.send(result);
});

//삭제  req.params.id
router.delete("/:id", async function (req, res) {
  let result = await mysql.query("boardDelete", params.id);
  res.send(result);
});

module.exports = router;
