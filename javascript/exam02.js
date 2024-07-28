/**
 * exam02
 * promise 실습
 */

let num1 = 10;
let num2 = 20;
let total = 20;

function numSum() {
    return new Promise((resolve, reject) => {
        if(total == num1+num2) {
            resolve("Right!!");
        } else {
            reject("Not Right..");
        }
    });
}

numSum()
.then(result => console.log(result))
.catch(err => console.log(err))


async function sumAwait() {
    let result = await numSum().catch(err => err);
    console.log(result);
}

sumAwait();