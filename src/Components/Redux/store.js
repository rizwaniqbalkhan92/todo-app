
// import {createStore,applyMiddleware,compose}  from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer  from './modules'



// const initialState={
    
// }
// const enhancers=[]
// const middleware=[thunk]


// const composeEnhancers=compose(
//     applyMiddleware(...middleware),
//     ...enhancers
// )


// export default createStore(
//     initialState,
//     composeEnhancers

// )
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./modules/reducer";

let store = createStore(reducer, applyMiddleware(thunk));
export default store;