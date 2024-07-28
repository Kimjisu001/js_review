/**
 * array_hw
 */

let arr = [
    {stdId : 1, kor : 90, eng : 80},
    {stdId : 2, kor : 50, eng : 50},
    {stdId : 3, kor : 90, eng : 90}
];

//1번 kor + eng 합계순으로 정렬
arr.sort((a,b) => (a.kor+a.eng) - (b.kor+b.eng));
console.log(arr);

//2번 평균이 60 미만인 학번만 출력 [2]
let avgGood = arr.filter(a => (a.kor+a.eng)/2 < 60).map(a => a.stdId);
console.log(avgGood);