import {usersAPI} from '../api/api'

const FOLLOW='users/FOLLOW';
const UNFOLLOW='users/UNFOLLOW'
const SET_USERS='users/SET-USERS';
const TOTAL_COUNT='users/TOTAL-COUNT';
const SET_PAGE='users/SET-PAGE';
const TOGGLE_PRELOADER='users/TOGGLE-PRELOADER'
const TOGGLE_FETCHING='users/TOGGLE-FETCHING';

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
        case FOLLOW:{
          return{
          ...state,
          users: state.users.map(item=>{
            if (item.id===action.userId){
              return {...item, followed: true}
            }
            return item;
          })
        };}
        case UNFOLLOW:{
          return{
          ...state,
          users: state.users.map(item=>{
            if (item.id===action.userId){
              return {...item, followed: false}
            }
            return item
          })
        };}
        case SET_USERS:{
          return {...state, users: action.users} ;
        }
        case TOTAL_COUNT:{
          return {...state, totalCount:action.totalCount}
        }
        case SET_PAGE:{
          return {...state, numberOfPage:action.numberOfPage}
        }
        case TOGGLE_PRELOADER:{
          return {...state, preloader:action.preloader}
        }
        case TOGGLE_FETCHING:{
          return {...state, toggleIsFetching:action.toggleIsFetching
            ? [...state.toggleIsFetching, action.fetchingId]
            : state.toggleIsFetching.filter(id=>id !=action.fetchingId)}
        }
      default:
        return state
    }
};
export const follow=(userId)=> ({type: FOLLOW, userId})
export const unfollow=(userId)=> ({type: UNFOLLOW, userId})
export const setUsers=(users)=> ({type: SET_USERS, users})
export const SetTotalCount=(totalCount)=> ({type: TOTAL_COUNT, totalCount})
export const SetPageCount=(numberOfPage)=> ({type: SET_PAGE, numberOfPage})
export const TogglePreloader=(preloader)=> ({type: TOGGLE_PRELOADER, preloader})
export const ToggleFetching=(toggleIsFetching,fetchingId)=> ({type: TOGGLE_FETCHING, toggleIsFetching, fetchingId})

export const SetUsersThunk=(numberOfPage,onOnePage)=>
  async (dispatch)=>{
    dispatch(TogglePreloader(false))
    dispatch(SetPageCount(numberOfPage))
    let data= await usersAPI.getUsers(numberOfPage,onOnePage)
    dispatch(setUsers(data.items));
    dispatch(TogglePreloader(true))
    dispatch(SetTotalCount(data.totalCount))
  };

export const UnfollowThunk=(userId)=>
  async (dispatch)=>{
    dispatch(ToggleFetching(true,userId))
    let data = await usersAPI.unfollow(userId)

    if (data.resultCode==0){
      dispatch(unfollow(userId))
    }
    dispatch(ToggleFetching(false,userId))
  }

export const FollowThunk=(userId)=>
  async (dispatch)=>{
    dispatch(ToggleFetching(true,userId))
    let data= await usersAPI.follow(userId)

    if (data.resultCode==0){
      dispatch(follow(userId))
    }
      dispatch(ToggleFetching(false,userId)) 
  }

export default usersReduser