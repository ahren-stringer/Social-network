import { profileAPI } from "../api/api";

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
        case 'ADD-POST':{
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
      case 'UPDATE-NEW-POST-TEXT':{
        let stateCopy={...state};
        stateCopy.newPostText=action.newText;
        return stateCopy
      }
      case 'SET-USER-PROFILE':{
        return {...state, profile: action.profile}
      }
      case 'SET-PROFILE-STATUS':{
        return {...state, profileStatus: action.status}
      }
      default:
        return state
    }
};
export const SetUserProfile=(profile)=> ({type: 'SET-USER-PROFILE', profile})
export const addPostAction=()=> ({type: 'ADD-POST'})
export const updateNewPostTextAction=(text)=> ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
export const SetProfileStatus=(status)=> ({type: 'SET-PROFILE-STATUS', status})

export const SetUserProfileThunk=(userId)=> (dispatch) => {
  // this.props.TogglePreloader(false)
          profileAPI.setProfile(userId).then(response=>{
            dispatch(SetUserProfile(response.data));
          });
}
export const SetProfileStatusThunk=(userId)=> (dispatch) => {
  // this.props.TogglePreloader(false)
          profileAPI.setProfileStatus(userId).then(response=>{
            dispatch(SetProfileStatus(response.data));
          });
}

export const UpdateProfileStatusThunk=(status)=> (dispatch) => {
  // this.props.TogglePreloader(false)
          profileAPI.updateProfileStatus(status).then(response=>{
            if (response.resultCode==0){
              dispatch(SetProfileStatus(status))
            }
          });
}

export default profileReduser