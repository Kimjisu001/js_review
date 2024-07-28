/**
 * useTotal
 */
//import total from './totalModule.js';
import { total, findNum, filterNum } from './totalModule.js';

console.log(total(10,20,30,40));
console.log(total(5, 6, 7));

let arr = [1,2,3,4,10,20,30,40,100,200,300];
console.log(findNum(10, arr));

console.log(filterNum(10, arr));