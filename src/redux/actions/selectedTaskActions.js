export const selectTask = (selectedTask) => {
  return {
    type: "SELECT_TASK",
    payload: selectedTask,
  };
};
