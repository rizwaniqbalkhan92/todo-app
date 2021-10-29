
export function CounterFn(counter){
    return dispatch=>{
        
        dispatch(Increment(counter))
        dispatch(Decrement(counter))
        dispatch(Update(counter))

    }
}
export const DECREMENT_SUCCESS="DECREMENT_SUCCESS"
export const INCREMENT_SUCCESS='INCREMENT_SUCCESS'
export const ADD_TO_DO='ADD_TO_DO'
export const UPDATE='UPDATE'
export const EDIT='EDIT'
export const Increment=(counter)=>({
    type:INCREMENT_SUCCESS,
    payload: counter
})

export const Decrement=(counter)=>({
    type:DECREMENT_SUCCESS,
    payload:counter
})
export const Update=(counter)=>({
    type:UPDATE,
    payload:counter
})


export function AddTodoFunc(todo){
    return dispatch=>{
     dispatch(addTodo(todo))
     dispatch(edit(todo))

       
        
    }
}

const addTodo=(todo)=>({
    type:'ADD_TO_DO',
    payload:todo

})
const edit=(todo)=>({
    type:'EDIT',
    payload:todo

})