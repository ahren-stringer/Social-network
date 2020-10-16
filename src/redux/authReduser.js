import React from 'react';
import { authAPI } from '../api/api';

let init={
   id:null,
   login:null,
   email:null,
   isAutorised:false
};
let authReduser=(state=init, action)=>{   
    switch(action.type){
        case 'AUTORISE':
         return{
           ...state,
           ...action.payload,
           isAutorised:action.payload.isAutorised
         }
        default:
        return state
};
};
export const autorise=(id,login,email,isAutorised)=> ({type: 'AUTORISE', payload:{id,login,email,isAutorised}});
// export const isAutorise=(isAutorised)=> ({type: 'IS-AUTORISE', isAutorised});

export const isAutoriseThunk=()=>
    (dispatch)=>{
      return authAPI.isAutorised().then(response=>{
        if (response.data.resultCode==0){
          let {id,login, email}=response.data.data;
          dispatch(autorise(id,login,email,true))
        }
        // this.props.TogglePreloader(true)
    });
  }

  export const loginThunk=(email,password,rememderMe)=>
  (dispatch)=>{
    authAPI.login(email,password,rememderMe).then(response=>{
      if (response.data.resultCode==0){
        dispatch(isAutoriseThunk())
      }
      // this.props.TogglePreloader(true)
  });
}

export const logoutThunk=()=>
(dispatch)=>{
  debugger
  authAPI.logout().then(response=>{
    if (response.data.resultCode==0){
      dispatch(autorise(null,null,null,false))
    }
    // this.props.TogglePreloader(true)
});
}

export default authReduser
