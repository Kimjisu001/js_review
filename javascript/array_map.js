const customerData = [
    {
        "id": 1,
        "name": "홍길동",
        "email": "hong@gmail.com",
        "phone": "010-1111-2222",
        "address": ""
    },
    {
        "id": 2,
        "name": "김대운",
        "email": "daewn@naver.com",
        "phone": "010-2222-3333",
        "address": ""
    },
    {
        "id": 3,
        "name": "임주희",
        "email": "jh4455@naver.com",
        "phone": "010-3333-4444",
        "address": ""
    },
    {
        "id": 8,
        "name": "백민주",
        "email": "bmj4415@naver.com",
        "phone": "010-1212-2323",
        "address": "대구광역시 달서구"
    },
    {
        "id": 9,
        "name": "안준모",
        "email": "mo0725@naver.com",
        "phone": "010-3211-6548",
        "address": null
    },
    {
        "id": 19,
        "name": "동구인",
        "email": "abc@gmail.com",
        "phone": "010-1111-2222",
        "address": "대구광역시 동구"
    },
    {
        "id": 21,
        "name": "ㅁㄴㅇㄹ",
        "email": "alscjf2738@naver.com",
        "phone": "010-1111-2222",
        "address": "대구광역시 달서구"
    },
    {
        "id": 22,
        "name": "ㅁㄴㅇㄹ",
        "email": "alscjf2738@naver.com",
        "phone": "010-1111-2222",
        "address": "대구광역시 달서구"
    },
    {
        "id": 23,
        "name": "ㅁㄴㅇ",
        "email": "asd",
        "phone": "asd",
        "address": "asd"
    },
    {
        "id": 24,
        "name": "asd",
        "email": "asd",
        "phone": "asd ",
        "address": "sad"
    }
];

//반복 : 함수의 리턴값을 모아서 새로운 배열을 만듦
let ids = customerData.map(ele => ele.id);
console.log(ids);