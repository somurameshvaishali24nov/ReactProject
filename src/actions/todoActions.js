import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const addNewListFn = (stateData) => {
    // Make the async call to the database
    return (dispatch, getState, { getFirebase, getFirestore }) => { // dispatch and getState act as a middleware thunk
        const firestore = getFirestore();
        firestore.collection('todolist').doc(`${stateData.id}`).set({
            ...stateData
        }).then(() => {
            dispatch({
                type: "NEW_TODO_LIST", 
                payload: stateData
            });
            toast.success(`Added Task ${ stateData.Title } Successfully!`);
        }).catch((err) => {
            dispatch({
                type: "NEW_TODO_LIST_ERROR", 
                payload: err
            });
            toast.error(`Something went wrong while adding!`);
        });
    }
} 

export const onCompleteTodoTask = (data, id, todo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => { // dispatch and getState act as a middleware thunk
        const firestore = getFirestore();
        firestore.collection('todolist').doc(`${todo.id}`)
        .set({...todo, "Completed": data})
        .then(() => {
            dispatch({ 
                type: "MARK_COMPLETED", 
                payload: { data, id}
            });
            toast.success(`Updated Task ${ todo.Title } Successfully!`);
        }).catch((err) => {
            dispatch({
                type: "MARK_COMPLETED_ERROR", 
                payload: err
            });
            toast.error(`Something went wrong while updating!`);
        });
    }
}