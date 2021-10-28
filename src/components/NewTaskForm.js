import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";

import { addTask } from "../redux/actions/tasksActions";
import { useDispatch } from "react-redux";

function NewTaskForm() {
  const [task, setTask] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({
      ...task,
      id: uuidv4(),
      [name]: value,
    });
  };

  const validate = () => {
    const taskTitle = document.getElementById("taskTitle").value;

    if (!taskTitle) {
      swal("Empty!!", "Task feild is empty!", "error");
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (JSON.stringify(task) === "{}") {
      swal("Oops!", "You should add the task first ", "warning");
    } else {
      if (validate()) {
        dispatch(addTask(task));
        e.target.reset();
        swal(
          "Task Added!",
          "Congratulations the Task has been added in all Tasks list ",
          "success"
        );
      }
    }
  };

  return (
    <div className="mb-5">
      <Form onSubmit={submitHandler}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3" className="text-light">
            Task
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              placeholder="Enter New Task"
              id="taskTitle"
              name="taskTitle"
              onChange={handleChange}
            />
          </Col>
          <Col sm="1">
            <Button variant="primary" type="submit">
              ADD
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default NewTaskForm;
