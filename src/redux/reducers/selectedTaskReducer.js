const selectedTaskReducer = (selectedTask = null, action) =>{
    switch (action.type) {
      case "SELECT_TASK":
        return action.payload;
      default:
        return selectedTask;
    }
}

export default selectedTaskReducer;