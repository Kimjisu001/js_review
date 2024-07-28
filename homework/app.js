const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

//라우터 받는곳
const boardRouter = require("./routes/board");

//서버 설정
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(morgan("dev"));

//서버주소 및 라우터 적용
app.get("/", (req, res) => {
    res.send("<h2>Hello World!! This is my homework...</h2>");
});
app.use("/board", boardRouter);

//서버 실행
app.listen(port, () => {
    console.log(`http://localhost:${port} 구동중`);
});