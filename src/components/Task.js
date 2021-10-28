import React from "react";
import { removeTask } from "../redux/actions/tasksActions";
import { selectTask } from "../redux/actions/selectedTaskActions";
import { makeComplete } from "../redux/actions/completedTasksActions";
import { useDispatch } from "react-redux";

function Task({ task, handleShowEditTaskForm }) {
  console.log(task);

  const dispatch = useDispatch();

  const handleSelectedTask = () => {
    handleShowEditTaskForm();
    dispatch(selectTask(task));
  };

  const handleComplete = () => {
    dispatch(removeTask(task.id));
    dispatch(makeComplete(task));
  };

  return (
    <div className="all-tasks rounded-pill w-75 d-flex flex-row justify-content-between align-items-center px-3 mb-3">
      <h4>{task.taskTitle}</h4>
      <div
        className=" d-flex flex-row justify-content-between align-items-center"
        style={{ width: "4rem" }}
      >
        <i
          className="fas fa-check me-2 done-icon"
          onClick={() => handleComplete()}
        ></i>
        <i
          className="fas fa-pen me-2 edit-icon"
          onClick={() => handleSelectedTask()}
        ></i>
        <i
          className="fas fa-times delete-icon"
          onClick={() => dispatch(removeTask(task.id))}
        ></i>
      </div>
    </div>
  );
}

export default Task;
