const completedTasksReducer = (completedTasks = [], action) =>{
    switch(action.type){
        case 'MAKE_COMPLETE':
            return [...completedTasks, action.payload];

        default:
            return completedTasks;
    }
}

export default completedTasksReducer;