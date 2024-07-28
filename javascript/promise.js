/**
 * promise
 */
//비동기 처리
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("time out")
        }, 4000);
    });
}

// 1.then
delay()
.then(result => {console.log(result)})

// 2.await : 익명함수
let result = async function() {await delay();};
console.log(result());

// 3. await : 이름있는 함수 -> 호출
async function delayAwait() {
    let result = await delay();
    console.log("delayAwait");
    console.log(result);
}

delayAwait();