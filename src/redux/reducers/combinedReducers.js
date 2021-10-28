import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import selectedTaskReducer from "./selectedTaskReducer";
import completedTasksReducer from "./completedTasksReducer";

export default combineReducers({
    tasks: tasksReducer,
    selectedTask: selectedTaskReducer,
    completedTasks: completedTasksReducer
})



