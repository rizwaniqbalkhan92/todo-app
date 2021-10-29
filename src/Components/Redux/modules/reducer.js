import { INCREMENT_SUCCESS,DECREMENT_SUCCESS,UPDATE,EDIT,ADD_TO_DO } from "./actions"
// import {  } from "./actions"




const initialState={
    counter:false,
    todos:[]
}



export function reducer (state=initialState,action){
    switch(action.type){
        case INCREMENT_SUCCESS:
            console.log(action)

            return {
                state,
                counter:action.payload,
                

            }
        case UPDATE:
            console.log(action)

            return {
                state,
                counter:action.payload
            }
        case DECREMENT_SUCCESS:

            console.log(action)

            return {
                state,
                counter:action.payload
            }
        case ADD_TO_DO:

            console.log(action)

            return {
                state,
                todos:action.payload
            }
        case EDIT:

            console.log(action)

            return {
                state,
                todos:action.payload
            }
            default:
                return state
    }


}
