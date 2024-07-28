/**
 * processTest
 */
//명령행 인수
import {argv, env} from "node:process";

argv.forEach((val, inx) => {
    console.log(`${inx} : ${val}`);
});

console.log(env.Path);