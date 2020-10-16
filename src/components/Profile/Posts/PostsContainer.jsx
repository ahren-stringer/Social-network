import React from 'react';
import {addPostAction, updateNewPostTextAction} from '../../../redux/profileReduser';
import Posts from './Posts';
import {connect} from 'react-redux';


// const PostsContainer=(props)=>{
//     let addPost=()=>{
//         props.store.dispatch(addPostAction())
//     }

//     let onPostChange=(text)=>{
//         props.store.dispatch(updateNewPostTextAction(text))
//     }


//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let addPost=()=>{
//                     store.dispatch(addPostAction())
//                 }
            
//                 let onPostChange=(text)=>{
//                     store.dispatch(updateNewPostTextAction(text))
//                 }
//                 return (<Posts  addPost={addPost}
//                     onPostChange={onPostChange}
//                     posts={store.getState().profileData.posts}
//                     newPostText={store.getState().profileData.newPostText}/>)
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps=(state)=>{
    return{
        posts: state.profileData.posts,
        newPostText: state.profileData.newPostText
    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        addPost: ()=> {dispatch(addPostAction())},
        onPostChange: (text)=> {dispatch(updateNewPostTextAction(text))}
    }
};

const PostsContainer=connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer