import { useState, useEffect } from "react";

function Todo({ todos }) {
  const todoList = todos.map((ele) => <div key={ele.id}>{ele.title}</div>);
  return <>{todoList}</>;
}

export default function EffectComponent() {
  let [count, setCount] = useState(1);
  let [todos, setTodos] = useState([]);

  function callAPI() {
    //jsonplaceholder Try it
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json); // 상태가 변경되면 리랜더링
      });
  }

  // 렌더링 후에 한 번만 실행
  useEffect(() => {
    //callAPI();
    console.log("effect");
    //setCount(count + 1); // DOM 업데이트 => 함수 실행 => useEffect
    return () => {
      console.log("clean up");
    };
  }, [count]); // 빈 배열을 의존성 배열로 사용하여 한 번만 실행

  return (
    <>
      <h1>side effect(부수효과)</h1>
      <div>{count}</div>
      <div>
        <Todo todos={todos}></Todo>
      </div>
    </>
  );
}
