const express = require("express"); //서버 생성
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const multer = require("multer");
const upload = multer({ dest: "c:/Temp/" });

const app = express(); //

const port = 80; //

//라우터:웹어플리케이션에서 url경로에 따라 요청한 페이지나 기능을 결정하는 역할
const userRouter = require("./routes/users.js");
const productRouter = require("./routes/products.js");
const loginRouter = require("./routes/login.js");
const customerRouter = require("./routes/customer.js");

app.use(cookieParser());
app.use(cors());
app.use(express.static("public")); //정적 파일위치 지정
app.use(express.urlencoded({ extended: false })); //body-parse를 위함
app.use(express.json()); //json패치
// app.use(morgan("combined"));                            //로그 확인
app.use(morgan("dev")); //로그 확인

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

//주소
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("/", loginRouter);
app.use("/member", userRouter);
app.use("/product", productRouter);
app.use("/customer", customerRouter);

app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.file);
  let originalName = req.file.originalName;
  let fileName = req.file.fileName;
  res.send(`upload success!! ${originalName}, ${fileName}`);
});

app.listen(port, () => {
  console.log(`서버 구동중!! http://localhost:${port}`);
});
