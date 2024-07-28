/**
 * useTotal2
 */
//import total from './totalModule.js';
import * as mymath from './totalModule.js'; //{ total, findNum, filterNum }

console.log(mymath.total(10,20,30,40));
console.log(mymath.total(5, 6, 7));

let arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200, 300];
console.log(mymath.findNum(10, arr));

console.log(mymath.filterNum(10, arr));