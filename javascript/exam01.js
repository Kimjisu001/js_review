/**
 * exam01
 * spread 연산자 실습
 */

let arr1 = [ 50, 60, 70];
let arr2 = [ 20, 30, 40];

let arr3 = [arr1, ...arr2];
//50 출력이 되도록
console.log(arr3[0][0]);
//20 출력이 되도록
console.log(arr3[1]);

//
let arr4 = [...arr1, arr2];
//50 출력이 되도록
console.log(arr4[0]);
//20 출력이 되도록
console.log(arr4[3][0]);