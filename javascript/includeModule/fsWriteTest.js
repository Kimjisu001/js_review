/**
 * fsWriteTest
 */
import fs from 'fs';

fs.writeFile("c:/Temp/07_Profile/text.txt", "hello world", err => {
    if(err) {
        throw err;
    } else {
        console.log("file wirte completed");
    }
});