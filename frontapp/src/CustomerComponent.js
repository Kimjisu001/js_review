import CustomerList from "./CustomerList";
import CustomerUpdate from "./CustomerUpdate";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function CustomerComponent() {
  let [id, setId] = useState();
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CustomerList
              onClick={(_id) => {
                setId(_id);
              }}
            />
          </Col>
          <Col>
            <Card>
              <CustomerUpdate id={id} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
