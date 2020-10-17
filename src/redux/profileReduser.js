import { profileAPI } from "../api/api";

const SET_USER_PROFILE='profile/SET-USER-PROFILE';
const ADD_POST='profile/ADD-POST'
const UPDATE_NEW_POST_TEXT='profile/UPDATE-NEW-POST-TEXT';
const SET_PROFILE_STATUS='profile/SET-PROFILE-STATUS';

let init={
        posts:[
          {id:1,name:'John', message:'Hi'},
          {id:2,name:'Lennon', message:'Im the warlus'},
        ],
        newPostText: '12345',
        profile:null,
        profileStatus:'',
};

let profileReduser=(state=init, action)=>{  
    switch (action.type){
        case ADD_POST:{
        let  newMessage={
          id:3,
          name:'Poul',
          message:state.newPostText,
        }
        let stateCopy={...state};
        stateCopy.posts=[...state.posts]
        stateCopy.posts.push(newMessage)
        stateCopy.newPostText=''
        return stateCopy
      }
      case UPDATE_NEW_POST_TEXT:{
        let stateCopy={...state};
        stateCopy.newPostText=action.newText;
        return stateCopy
      }
      case SET_USER_PROFILE:{
        return {...state, profile: action.profile}
      }
      case SET_PROFILE_STATUS:{
        return {...state, profileStatus: action.status}
      }
      default:
        return state
    }
};
export const SetUserProfile=(profile)=> ({type: SET_USER_PROFILE, profile})
export const addPostAction=()=> ({type: ADD_POST})
export const updateNewPostTextAction=(text)=> ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const SetProfileStatus=(status)=> ({type: SET_PROFILE_STATUS, status})

export const SetUserProfileThunk=(userId)=> async(dispatch) => {
  let response= await profileAPI.setProfile(userId)
  dispatch(SetUserProfile(response.data));
}
export const SetProfileStatusThunk=(userId)=> async(dispatch) => {
  let response= await profileAPI.setProfileStatus(userId)
  dispatch(SetProfileStatus(response.data));
}

export const UpdateProfileStatusThunk=(status)=> async(dispatch) => {
  let response= await profileAPI.updateProfileStatus(status)
  if (response.resultCode==0){
    dispatch(SetProfileStatus(status))
  }
}

export default profileReduser