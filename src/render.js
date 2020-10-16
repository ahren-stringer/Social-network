import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost,updateNewPostText} from './redux/store'
// addPost('!!!!!!!!!')

export let renderEntireTree=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
          <App addPost={addPost} state={state} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}