import messageReducer from "./Message-Reducer";
import profileReducer from "./Profile-Reducer";

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

  _callSubscrider() {
    console.log('state changes');
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscrider = observer;
  },
  AddPost() {
    let NewPost = {
      id: 4,
      message: this._state.PageProfile.newPostText,
    };

    this._state.PageProfile.posts.push(NewPost);

    this._state.PageProfile.newPostText = '';
    this._callSubscrider(this._state);
  },
  UpdateNewPostText(NewText) {

    this._state.PageProfile.newPostText = (NewText);

    this._callSubscrider(this._state);

  },
  AddMessage() {
    let NewMessage = {
      id: 7,
      text: this._state.PageMessage.newMessage,
    };

    this._state.PageMessage.chat.push(NewMessage);
    this._state.PageMessage.newMessage = '';
    this._callSubscrider(this._state);
  },
  UpdateNewMessage(NewText) {

    this._state.PageMessage.newMessage = (NewText);

    this._callSubscrider(this._state);
  },

  dispatch(action) {

    this._state.PageProfile = profileReducer(this._state.PageProfile, action);

    this._state.PageMessage = messageReducer(this._state.PageMessage, action);



    this._callSubscrider(this._state);
  }

}





export default store;

window.store = store;