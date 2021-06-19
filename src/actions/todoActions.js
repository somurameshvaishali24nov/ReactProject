export const addNewListFn = (stateData) => {
    return {
       type: "NEW_TODO_LIST", 
       payload: stateData
    }
} 

export const onCompleteTodoTask = (data, Id) => {
    return { 
        type: "MARK_COMPLETED", 
        payload: { data, Id} 
    }
}