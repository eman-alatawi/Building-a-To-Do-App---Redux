import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { updateTask } from "../redux/actions/tasksActions";
import { useDispatch, useSelector } from "react-redux";

function EditTaskForm({ handleShowEditTaskForm }) {
  const selectedTask = useSelector((state) => state.selectedTask);

  const [updatedTask, setUpdatedTask] = useState(selectedTask);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({
      ...updatedTask,
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

    if (JSON.stringify(selectedTask) === "{}") {
      swal("Oops!", "You should add the task first ", "warning");
    } else {
      if (validate()) {
        dispatch(updateTask(updatedTask));
        handleShowEditTaskForm();
        e.target.reset();
        swal(
          "Task Edited!",
          "Congratulations Task has been Edited successfully ",
          "success"
        );
      }
    }
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3" className="text-light">
            Task
          </Form.Label>
          <Col sm="8">
            <Form.Control
              id="taskTitle"
              type="text"
              placeholder="Enter New Task"
              name="taskTitle"
              value={updatedTask.taskTitle}
              onChange={handleChange}
            />
          </Col>
          <Col sm="1">
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default EditTaskForm;
