import { combineReducers, createStore } from "redux";
import profileReducer from "./Profile-Reducer";
import messageReducer from "./Message-Reducer";
import usersReducer from "./Users-Reducer";

let reducers = combineReducers({
    PageMessage : messageReducer,
    PageProfile : profileReducer,
    PageUsers : usersReducer,
})

let store = createStore(reducers);

export default store;
