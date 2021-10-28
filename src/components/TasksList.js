import React, { useState } from "react";
import { useSelector } from "react-redux";
import CompletedTask from "./CompletedTask";
import EditTaskForm from "./EditTaskForm";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";

function TasksList() {
  const [shouldShowEditTaskForm, toggleShowEditTaskForm] = useState(false);

  const tasks = useSelector((state) => state.tasks);

  const completedTasks = useSelector((state) => state.completedTasks);

  const handleShowEditTaskForm = () => {
    toggleShowEditTaskForm(!shouldShowEditTaskForm);
  };

  return (
    <>
      <div className="container py-5 d-flex  flex-column justify-content-center align-items-center">
        <h1 className="text-light text-uppercase mb-5">Track Your Tasks</h1>
        {shouldShowEditTaskForm ? (
          <EditTaskForm handleShowEditTaskForm={handleShowEditTaskForm} />
        ) : (
          <NewTaskForm />
        )}

        <div className="main-container">
          <div className="all-tasks-container">
            <h3>All Tasks</h3>
            <div className="inner-container">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  handleShowEditTaskForm={handleShowEditTaskForm}
                />
              ))}
            </div>
          </div>

          <div className="completed-tasks-container">
            <h3>Completed Tasks</h3>
            <div className="inner-container">
              {completedTasks.map((task) => (
                <CompletedTask key={task.id} task={task} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksList;
