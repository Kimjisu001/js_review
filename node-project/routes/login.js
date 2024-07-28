const express = require("express");
const router = express.Router();

//login
router.get("/login", (req, res) => {
    let {email, pw} = req.query;
    console.log(email);
    req.session.email = req.query.email;
    req.session.is_logined = true;
    req.session.save(err => {
        if(err) throw err;
        else res.redirect("/member");
    })
});

//logout
router.get("/logout", (req, res) => {
    let email = req.query.email;

    res.send(`Logout >> email : ${email}`)
})

module.exports = router;