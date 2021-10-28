import React from "react";

function CompletedTask({ task }) {
  console.log(task);

  return (
    <div className=" completed-tasks rounded-pill w-75 d-flex flex-row justify-content-between align-items-center px-3 mb-3">
      <h4>{task.taskTitle}</h4>
      <div
        className=" d-flex flex-row justify-content-between align-items-center"
        style={{ width: "4rem" }}
      ></div>
    </div>
  );
}

export default CompletedTask;
