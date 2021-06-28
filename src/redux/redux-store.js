import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./Profile-Reducer";
import messageReducer from "./Message-Reducer";
import usersReducer from "./Users-Reducer";
import authReducer from "./auth";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    PageMessage : messageReducer,
    PageProfile : profileReducer,
    PageUsers : usersReducer,
    authData : authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;