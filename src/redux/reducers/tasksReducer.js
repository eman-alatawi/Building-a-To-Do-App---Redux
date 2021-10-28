const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];
    case "UPDATE_TASK":
      const filterdTasks = tasks.filter(
        (filterdTask) => filterdTask.id !== action.payload.id
      );
      return [action.payload, ...filterdTasks];

    case "REMOVE_TASK":
      const filterdTasksAfterRemove = tasks.filter(
        (filterdTask) => filterdTask.id !== action.payload
      );
      return filterdTasksAfterRemove;
    default:
      return tasks;
  }
};

export default tasksReducer;
