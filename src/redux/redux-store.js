import { combineReducers, createStore } from "redux";
import profileReducer from "./Profile-Reducer";
import messageReducer from "./Message-Reducer";
import usersReducer from "./Users-Reducer";
import authReducer from "./auth";

let reducers = combineReducers({
    PageMessage : messageReducer,
    PageProfile : profileReducer,
    PageUsers : usersReducer,
    authData : authReducer,
})

let store = createStore(reducers);

window.store = store;
export default store;