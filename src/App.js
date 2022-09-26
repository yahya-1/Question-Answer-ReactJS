import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [data, setData] = useState(question);

  const onAdd = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تمت الاإضافة بنجاح", "success");
  };

  const deleteAllItem = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تمت حذف الكل بنجاح", "success");
  };

  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify("تمت حذف السؤال بنجاح", "success");
    if (items.length <= 0) {
      deleteAllItem();
    }
  };

  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else if (type === "success") {
      toast.success(message);
    }
  };
  return (
    <div className="text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col className="col-md-4">
            <p className="fs-3">اسئلة وأجوبة شائعة</p>
          </Col>
          <Col className="col-md-8">
            <FormInput notify={notify} onAdd={onAdd} />
            <QAList deleteOneItem={deleteOneItem} data={data} />

            {data.length ? (
              <button onClick={deleteAllItem} className="btn-custom w-100 mt-2">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
