import {usersAPI} from '../api/api'

let init={
        users:[],
        totalCount: 1,
        numberOfPage:1,
        onOnePage:5,
        preloader:false,
        toggleIsFetching: [],
};

let usersReduser=(state=init, action)=>{  
    switch (action.type){
        case 'FOLLOW':{
          return{
          ...state,
          users: state.users.map(item=>{
            if (item.id===action.userId){
              return {...item, followed: true}
            }
            return item;
          })
        };}
        case 'UNFOLLOW':{
          return{
          ...state,
          users: state.users.map(item=>{
            if (item.id===action.userId){
              return {...item, followed: false}
            }
            return item
          })
        };}
        case 'SET-USERS':{
          return {...state, users: action.users} ;
        }
        case 'TOTAL-COUNT':{
          return {...state, totalCount:action.totalCount}
        }
        case 'SET-PAGE':{
          return {...state, numberOfPage:action.numberOfPage}
        }
        case 'TOGGLE-PRELOADER':{
          return {...state, preloader:action.preloader}
        }
        case 'TOGGLE-FETCHING':{
          return {...state, toggleIsFetching:action.toggleIsFetching
            ? [...state.toggleIsFetching, action.fetchingId]
            : state.toggleIsFetching.filter(id=>id !=action.fetchingId)}
        }
      default:
        return state
    }
};
export const follow=(userId)=> ({type: 'FOLLOW', userId})
export const unfollow=(userId)=> ({type: 'UNFOLLOW', userId})
export const setUsers=(users)=> ({type: 'SET-USERS', users})
export const SetTotalCount=(totalCount)=> ({type: 'TOTAL-COUNT', totalCount})
export const SetPageCount=(numberOfPage)=> ({type: 'SET-PAGE', numberOfPage})
export const TogglePreloader=(preloader)=> ({type: 'TOGGLE-PRELOADER', preloader})
export const ToggleFetching=(toggleIsFetching,fetchingId)=> ({type: 'TOGGLE-FETCHING', toggleIsFetching, fetchingId})

export const SetUsersThunk=(numberOfPage,onOnePage)=>{
  return (dispatch)=>{
    dispatch(TogglePreloader(false))
    dispatch(SetPageCount(numberOfPage))
  usersAPI.getUsers(numberOfPage,onOnePage)
              .then(data=>{
                dispatch(setUsers(data.items));
                dispatch(TogglePreloader(true))
                dispatch(SetTotalCount(12))
              });
              }
};

export const UnfollowThunk=(userId)=>{
  return (dispatch)=>{
    dispatch(ToggleFetching(true,userId))
    usersAPI.unfollow(userId).then(data=>{
      if (data.resultCode==0){
        dispatch(unfollow(userId))
      }
      dispatch(ToggleFetching(false,userId))
    }) 
  }
};

export const FollowThunk=(userId)=>{
  return (dispatch)=>{
    dispatch(ToggleFetching(true,userId))
    usersAPI.follow(userId).then(data=>{
      if (data.resultCode==0){
        dispatch(follow(userId))
      }
      dispatch(ToggleFetching(false,userId))
    }) 
  }
};

export default usersReduser