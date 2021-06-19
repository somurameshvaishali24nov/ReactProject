const initState = {
    todoList: [
        {
            Id: 1,
            Title: "Meet the Dentist",
            Completed: true
        },
        {
            Id: 2,
            Title: "Meet the Dentist1",
            Completed: false
        },
        {
            Id: 3,
            Title: "Meet the Dentist2",
            Completed: true
        },
        {
            Id: 4,
            Title: "Meet the Dentist3",
            Completed: false
        },
    ],
    openAddTodoListComponent: false,
    todoItem: {
        Id: 0,
        Title: '',
        Completed: false
    }
}

const RootReducer = ( state = initState, action ) => {
    let todoList = []
    switch ( action.type ) {
        case "NEW_TODO_LIST":
            todoList = [...state.todoList, action.payload];            
            
            return {
                ...state,
                todoList
            }
        case "MARK_COMPLETED":
            todoList = [...state.todoList];
            let index = todoList.findIndex( idIdx => idIdx.Id === action.payload.Id );
            todoList[index] = { ...todoList[index], Completed: action.payload.data };

            return {
                ...state,
                todoList
            }
        default:
            return state;
    }
};

export default RootReducer;