/**
 * objectLiteral
 */

//객체상수
let username = "hello";
let temp = ` `;
let getName = function() {};
let obj = { username, hobby : [], addr : { zip : 50001, si : "대구" }, getName };

//객체구조분해
let {addr, hobby} = obj;
//let addr = obj.addr;
//let hobby = obj.hobby;
console.log(addr.zip);

//배열구조분해 (... -> rest 연산자)
let scores = [90, 80, 100, 50, 70, 60];
let [fst, snd, ...rest] = scores;
console.log(rest);

//배열 얕은 복사
let copyScores = scores;
copyScores[0] = 10;
console.log(scores[0], copyScores[0]);

//배열 깊은 복사 spread 연산자
let deepCopyScores = [ ...scores ];
deepCopyScores[0] = 50;
console.log(scores[0], deepCopyScores[0]);

//객체 얕은 복사
let emp = { username : "choi", dept : "개발", sal : 5000 };
let copyEmp = emp;
copyEmp.sal = 1000;
console.log(emp.sal, copyEmp.sal);

//객체 깊은 복사
let deepCopyEmp = { ...emp, sal : 3000};
// deepCopyEmp.sal = 3000;
console.log(emp.sal, deepCopyEmp.sal);