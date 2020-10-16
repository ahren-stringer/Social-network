import React from 'react';
import s from './Posts.module.css'
import Single_post from './Single_post';
import {addPostAction, updateNewPostTextAction} from '../../../redux/profileReduser'


const Posts=(props)=>{

    let textarea=React.createRef();

    let addPost=()=>{
        props.addPost()
    }

    let onPostChange=()=>{
        props.onPostChange(textarea.current.value)
    }

    return(
        <div>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={textarea}
                              value={props.newPostText}
                              onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>
                        add post
                    </button>
                </div>
            </div>
            {
                props.posts.map((item)=> <Single_post name={item.name} message={item.message}/>)
            }
            {/* <Single_post name='John' part='Rytm guitar'/>
            <Single_post name='Lennon' part='Vocal'/> */}
      </div>
    )
}

export default Posts