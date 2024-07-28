/**
 * fsReadTest
 */
import fs from 'fs';

//비동기식
fs.readFile("c:/Temp/07_Profile/js객체.js", "utf-8", (err, data) => {
    if(err) throw err;
    //console.log(data);
});

//동기식
var text = fs.readFileSync("c:/Temp/07_Profile/js객체.js");
console.log(text.toString());