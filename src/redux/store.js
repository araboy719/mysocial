import MessageReducer from "./Message-Reducer";
import ProfileReducer from "./Profile-Reducer";

const SEND_MESSAGE = 'SEND-MESSEGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
  _state: {
    PageMessage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Artur' },
        { id: 3, name: 'Ira' },
        { id: 4, name: 'Zohan' },
        { id: 5, name: 'Kolya' },
        { id: 6, name: 'Tima' },
        { id: 7, name: 'Sasha' },
        { id: 8, name: 'Ara' },],
      chat: [
        { id: 1, text: "Hi" },
        { id: 2, text: "HAllo" },
        { id: 3, text: "My Name it is Jony" },
        { id: 4, text: "How are you" },
        { id: 5, text: "Hi" },
        { id: 6, text: "Yo" },
      ],
      newMessage: '',
    },
    PageProfile: {
      posts: [
        { id: 1, message: "Hi it is my first post" },
        { id: 2, message: "i am study React" },
        { id: 3, message: "Now i am use 'props'" },
      ],
      newPostText: ''

    },
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed")
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.PageMessage = MessageReducer(this._state.PageMessage, action );
    this._state.PageProfile = ProfileReducer(this._state.PageProfile, action );
    
    this._callSubscriber(this._state);

  },
}






window.store = store;
export default store;