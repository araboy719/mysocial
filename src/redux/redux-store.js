import MessageReducer from "./Message-Reducer";
import ProfileReducer from "./Profile-Reducer";

const { createStore, combineReducers } = require("redux");

let redusers = combineReducers({
    PageProfile: ProfileReducer,
    PageMessage: MessageReducer,
});

let store = createStore(redusers);

export default store;