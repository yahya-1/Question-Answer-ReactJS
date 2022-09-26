import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from "../data";

function QAList({ data, deleteOneItem }) {
  const dataLocal = JSON.parse(localStorage.getItem("items"));

  const onDeleteItem = (id) => {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((item) => item.id === id);
      question.splice(index, 1);

      deleteOneItem(question);
    }
  };

  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="text-end" style={{ width: "95%" }}>
                    {item.q}
                  </div>
                </Accordion.Header>
                <Accordion.Body className="d-flex justify-content-between align-items-center">
                  {item.a}
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-custom2 "
                  >
                    مسح السؤال
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <p className="fs-6 my-5 text-center">لا يوجد اسئلة</p>
        )}
      </Accordion>
    </Row>
  );
}

export default QAList;
