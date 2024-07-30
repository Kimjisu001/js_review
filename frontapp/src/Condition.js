import Replys from "./Reply.js";
//===============================================================
//배운것: props, 컴포넌트(사용자정의태그)
//        if문 if (isPacked) {return <li className="item">{name} ✔</li>;}
//   return <li className="item">{name}</li>;
//삼항연산자
//return <li className="item">{isPacked ? name + " ✔" : name}</li>;
//&&연산자
//참고자료: https://ko.react.dev/learn/passing-props-to-a-component props
// 과제: https://ko.react.dev/learn/thinking-in-react

//===============================================================

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {" "}
      {name} {isPacked && "✔"}
    </li>
  );
}
//====================================================
//
//====================================================

function Items({ todos }) {
  const item = todos.map((ele) => (
    <Item {...ele} />
    //<Item name={ele.name} isPacked={ele.isPacked} />
  ));
  return <> {item}</>;
}

//====================================================
//                   출력
//====================================================
export default function PackingList() {
  let todos = [
    { name: "Space suit", isPacked: true },
    { name: "Helmet with a golden leaf", isPacked: true },
    { name: "Photo of Tam", isPacked: false },
  ];

  const replyList = [
    { id: 1, title: "첫번째", writer: "김지수" },
    { id: 2, title: "두번째", writer: "염수미" },
    { id: 3, title: "세번째", writer: "김영하" },
  ];
  return (
    <section>
      <h1>Sally Ride's Packing List </h1>
      <ul>
        <Items todos={todos} />
      </ul>
      <h2>댓글 리스트</h2>
      <Replys datas={replyList}></Replys>
    </section>
  );
}
