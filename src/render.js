import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AddMessage, AddPost, UpdateNewMessage, UpdateNewPostText, } from './redux/state.js';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
       AddPost={AddPost}
       AddMessage={AddMessage}
       UpdateNewMessage={UpdateNewMessage}
       UpdateNewPostText={UpdateNewPostText}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();
