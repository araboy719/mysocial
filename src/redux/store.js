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
    if (action.type === 'ADD-POST') {
      let NewPost = {
        id: 4,
        message: this._state.PageProfile.newPostText,
      };

      this._state.PageProfile.posts.push(NewPost);

      this._state.PageProfile.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

      this._state.PageProfile.newPostText = (action.NewText);

      this._callSubscriber(this._state);
    } else if (action.type === 'SEND-MESSEGE') {
      let NewMessage = {
        id: 7,
        text: this._state.PageMessage.newMessage,
      };
  
      this._state.PageMessage.chat.push(NewMessage);
      this._state.PageMessage.newMessage = '';
      this._callSubscriber(this._state);
    }else if ( action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      // this._state.PageMessage.newMessage = (NewText);

      this._callSubscriber(this._state);
    }
  },

  AddPost() {
    let NewPost = {
      id: 4,
      message: this._state.PageProfile.newPostText,
    };

    this._state.PageProfile.posts.push(NewPost);

    this._state.PageProfile.newPostText = '';
    this._callSubscriber(this._state);
  },
  UpdateNewPostText(NewText) {
    this._state.PageProfile.newPostText = (NewText);

    this._callSubscriber(this._state);

  },
  AddMessage() {
    let NewMessage = {
      id: 7,
      text: this._state.PageMessage.newMessage,
    };

    this._state.PageMessage.chat.push(NewMessage);
    this._state.PageMessage.newMessage = '';
    this._callSubscriber(this._state);
  },
  UpdateNewMessage(NewText) {

    this._state.PageMessage.newMessage = (NewText);

    this._callSubscriber(this._state);
  },

}


window.store = store;
export default store;