//state, ref, event => form field
//https://ko.react.dev/learn/reacting-to-input-with-state
//file:///D:/%EA%B5%90%EC%9E%AC/14_react/react_ppt/ReactJS02_%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9.pdf
//========================================================

import { useState, useRef } from "react";

export default function App() {
  //let [message, setMessage] = useState("사과");
  //let [email, setEmail] = useState("ys01275@naver.com");
  let [from, setForm] = useState({ message: "사과", email: "" });
  let inputMessage = useRef(); //document.getElementById("")
  //const handlerChange = (event) =>{}
  function handlerChange(event) {
    setForm({ ...from, [event.target.name]: event.target.value });
  }
  return (
    <>
      <from>
        {from.message} {from.email}
        <input
          name="message"
          value={from.message}
          onChange={handlerChange}
          ref={inputMessage}
        ></input>
        <input name="email" value={from.email} onChange={handlerChange}></input>
        <button
          type="button"
          onClick={(event) => {
            setForm({ message: "", email: "" });
            inputMessage.current.focus();
          }}
        >
          확인
        </button>
      </from>
    </>
  );
}
