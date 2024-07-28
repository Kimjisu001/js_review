const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    //쿼리스트링
    let page = req.query.page;
    let search = req.query.search;

    //세션
    let email = req.session.email;

    //쿠키 읽기
    console.log("cookies : "+req.cookies.popupyn);

    //쿠키 저장
    res.cookie("email", email), {
        expires : new Date(Date.now() + 15000)
    }

    page = page == null ? 1 : page;
    search = search == null ? "" : search;

    res.send(`Hello Get Users! page : ${email}`);
});

router.get("/:username", (req, res) => {
    const username = req.params.username;
    res.send(`Hello Get ${username} Users!`);
});

router.post("/", (req, res) => {
    const username = req.body.username;
    const addr = req.body.addr;

    res.send(`Hello Post Users! name : ${username}, addr : ${addr}`);
});

router.put("/:userid", (req, res) => {
    let userid = req.params.userid;
    const data = req.body;
    const result = {userid, ...data}
    res.send(result);
});

router.delete("/:userid", (req, res) => {
    let userid = req.params.userid;
    res.send("Delete User! 삭제번호 : " + userid);
});

module.exports = router;