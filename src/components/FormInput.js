import { Form, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import { question } from "../data";

function FormInput({ onAdd, notify }) {
  const [qus, setQus] = useState("");
  const [Ans, setAns] = useState("");

  const addNewItem = () => {
    if (qus === "" || Ans === "") {
      notify("من فضلك أكمل البيانات", "Error");
      return;
    }

    question.push({ id: Math.random(), q: qus, a: Ans });
    setQus("");
    setAns("");

    onAdd();

    console.log(question);
  };
  return (
    <>
      <Row className="justify-content-center mb-3">
        <Col className="col-sm-5">
          <Form.Control
            value={qus}
            onChange={(e) => setQus(e.target.value)}
            type="text"
            placeholder="ادخل السؤال"
          />
        </Col>

        <Col className="col-sm-5">
          <Form.Control
            value={Ans}
            onChange={(e) => setAns(e.target.value)}
            type="text"
            placeholder="ادخل الإجابة"
          />
        </Col>
        <Col className="col-sm-2">
          <button onClick={addNewItem} className="btn-custom" type="submit">
            إضافة
          </button>
        </Col>
      </Row>
    </>
  );
}

export default FormInput;
