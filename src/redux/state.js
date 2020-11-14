import { rerenderEntireTree } from "../render";

let state = {
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
};

export let AddPost = () => {
  let NewPost = {
    id: 4,
    message: state.PageProfile.newPostText,
  };

  state.PageProfile.posts.push(NewPost);

  state.PageProfile.newPostText = '';
  rerenderEntireTree(state);
}

export let UpdateNewPostText = (NewText) => {

  state.PageProfile.newPostText = (NewText);

  rerenderEntireTree(state);

}

export let AddMessage = () => {
  let NewMessage = {
    id: 7,
    text: state.PageMessage.newMessage,
  };

  state.PageMessage.chat.push(NewMessage);
  state.PageMessage.newMessage = '';
  rerenderEntireTree(state);
} 

export let UpdateNewMessage = (NewText) => {

  state.PageMessage.newMessage = (NewText);
  
  rerenderEntireTree(state);
} 

export default state;