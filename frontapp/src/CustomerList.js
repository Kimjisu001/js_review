import { useState, useEffect } from "react";

export default function CustomerList(props) {
  let [customers, setCustomers] = useState([]);
  function callAPI() {
    fetch("http://localhost/customer")
      .then((result) => result.json())
      .then((json) => setCustomers(json));
  }
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      {customers.map((customer) => (
        <div>
          <span>
            <a
              id={customer.id}
              href="/"
              onClick={(event) => {
                event.preventDefault();
                props.onClick();
              }}
            ></a>
          </span>
          <span>
            <a>{customer.id}</a>
          </span>
          <span>
            <a>{customer.name}</a>
          </span>
          <span>
            <a>{customer.email}</a>
          </span>
          <span>
            <a>{customer.phone}</a>
          </span>
          <span>
            <a>{customer.address}</a>
          </span>
        </div>
      ))}
    </>
  );
}
