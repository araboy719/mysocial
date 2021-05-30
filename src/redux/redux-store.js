import { combineReducers, createStore } from "redux";
import profileReducer from "./Profile-Reducer";
import messageReducer from "./Message-Reducer";

let reducers = combineReducers({
    PageMessage : messageReducer,
    PageProfile : profileReducer,
})

let store = createStore(reducers);

export default store;
