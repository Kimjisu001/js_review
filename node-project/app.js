const express = require("express"); // Express 프레임워크 ->서버 생성
const cors = require("cors"); // CORS(Cross-Origin Resource Sharing) 설정
const morgan = require("morgan"); // HTTP 요청 로깅 미들웨어
const session = require("express-session"); // 세션 관리 미들웨어
const fileStore = require("session-file-store")(session); // 파일 기반 세션 저장소
const cookieParser = require("cookie-parser"); // 쿠키 파싱 미들웨어
const multer = require("multer"); // 파일 업로드 미들웨어
const upload = multer({ dest: "c:/Temp/" }); // 파일 업로드 경로 설정

const app = express(); //Express 앱 초기화
const port = 80; //Express 앱 포트 설정

//라우터:웹어플리케이션에서 url경로에 따라 요청한 페이지나 기능을 결정하는 역할
const userRouter = require("./routes/users.js");
const productRouter = require("./routes/products.js");
const loginRouter = require("./routes/login.js");
const customerRouter = require("./routes/customer.js");
const boardRouter = require("./routes/board.js");

//MySQL 연결 설정
const mysql = require("./mysql/pool"); //20240731
const { boardDelete } = require("./mysql/board_sql.js");

//미들웨어 적용
app.use(cookieParser());
app.use(cors());
app.use(express.static("public")); //정적 파일위치 지정
app.use(express.urlencoded({ extended: false })); //body-parse를 위함
app.use(express.json()); //json패치
// app.use(morgan("combined"));                            //로그 확인
app.use(morgan("dev")); //로그 확인
app.use("/board", boardRouter); //20240731

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 600000,
    },
    //store: new fileStore(),
  })
);

//기본 엔드포인트 설정
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

//라우터 연결
app.use("/", loginRouter);
app.use("/member", userRouter);
app.use("/product", productRouter);
app.use("/customer", customerRouter);
app.use("/board", boardRouter);

//파일 업로드 엔드포인트 설정
app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.file);
  let originalName = req.file.originalName;
  let fileName = req.file.fileName;
  res.send(`upload success!! ${originalName}, ${fileName}`);
});

//서버 시작
app.listen(port, () => {
  console.log(`서버 구동중!! http://localhost:${port}`);
});
