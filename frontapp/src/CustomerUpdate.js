import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function CustomerUpdate(props) {
  let [customers, setCustomers] = useState([]);
  function callAPI() {
    if (!props.id) {
      return;
    }
    fetch("http://localhost/customer/" + props.id)
      .then((result) => result.json())
      .then((json) => setCustomers(json[0]));
  }
  useEffect(() => {
    callAPI();
  }, [props.id]);
  return (
    <>
      <from>
        <Button type="reset">초기화</Button>
        <Button type="button">삭제</Button>
        <Button type="submit">저장</Button>
        <input type="text">{customers.id}</input>
        <input type="text">{customers.name}</input>
        <input type="text">{customers.email}</input>
        <input type="text">{customers.phone}</input>
        <input type="text">{customers.address}</input>
      </from>
    </>
  );
}
