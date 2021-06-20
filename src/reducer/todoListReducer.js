const initState = {
    todoList: [
        {
            id: 1,
            Title: "Meet the Dentist",
            Completed: true
        }
    ],
    openAddTodoListComponent: false,
    todoItem: {
        id: 0,
        Title: '',
        Completed: false
    }
}

const TodoListReducer = ( state = initState, action ) => {
    let todoList = []
    switch ( action.type ) {
        case "NEW_TODO_LIST":
            return state;
        case "MARK_COMPLETED":
            todoList = [...state.todoList];
            let index = todoList.findIndex( idIdx => idIdx.id === action.payload.id );
            todoList[index] = { ...todoList[index], Completed: action.payload.data };
            return {
                ...state,
                todoList
            }
        case "NEW_TODO_LIST_ERROR":
            console.error("Error: ", state, action);
            return state;
        case "MARK_COMPLETED_ERROR":
            console.error("Something went wrong! ", state, action);
            return state;
        default:
            return state;
    }
};

export default TodoListReducer;