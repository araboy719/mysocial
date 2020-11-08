import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Artur' },
  { id: 3, name: 'Ira' },
  { id: 4, name: 'Zohan' },
  { id: 5, name: 'Kolya' },
  { id: 6, name: 'Tima' },
  { id: 7, name: 'Sasha' },
  { id: 8, name: 'Ara' },
];

let ChatData = [
{ id: 1, text: "Hi" },
{ id: 2, text: "HAllo" },
{ id: 3, text: "My Name it is Jony" },
{ id: 4, text: "How are you" },
{ id: 5, text: "Hi" },
{ id: 6, text: "Yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialogsData} chat={ChatData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
