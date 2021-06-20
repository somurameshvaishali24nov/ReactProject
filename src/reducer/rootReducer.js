import TodoListReducer from "./todoListReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const RootReducer = combineReducers({
    todoListReduce: TodoListReducer,
    firestore: firestoreReducer
})

export default RootReducer;