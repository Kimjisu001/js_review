/**
 * array, map, filter
 */

let arr = [
    {username : "choi", dept : "개발", sal : 2000},
    {username : "park", dept : "인사", sal : 1000},
    {username : "kim", dept : "개발", sal : 1500}
];

//사원 이름이 park인 사원 (find)
let findResult = arr.find(a => a.username == "park");
console.log(findResult);

//1. sal 1500 이상인 사원 조회 filter
let filterResult = arr.filter(emp => emp.sal >= 1500);
console.log(filterResult);

//2. 급여순 오름차순 정렬 sort -> 이름순
arr.sort(sortCompare);
console.log(arr);

function sortCompare(a,b) {
    if(a.username > b.username) return 1;
    else if(a.username < b.username) return -1;
    else return 0;
}

//3. 급여합계(reduce)
let reduceResult = arr.reduce((a,b) => a + b.sal, 0);
console.log(reduceResult);

//4. 모든 사원의 급여를 500인상(map)
let anotherMap = arr.map(emp => {
    return { ...emp, sal: emp.sal + 500}
});
let mapResult = arr.map(a => {
    a.sal+=500;
    return a;
});
console.log(mapResult);

//5. sal 2000이상인 사원=>kim, choi만 나오도록]
let filterMapResult = arr.filter(emp => emp.sal >= 2000).map(emp => emp.username)
console.log("sal >= 2000 사원명", filterMapResult);