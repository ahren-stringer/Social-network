import React from 'react';
import { authAPI } from '../api/api';
import {isAutoriseThunk} from './authReduser'

let init={
   initialized:false
};
let appReduser=(state=init, action)=>{   
    switch(action.type){
        case 'INITIALIZED':
         return{
           ...state,
           initialized:true
         }
        default:
        return state
};
};
export const initialize=()=> ({type: 'INITIALIZED'});
// export const isAutorise=(isAutorised)=> ({type: 'IS-AUTORISE', isAutorised});

export const initializedThunk=()=>
    (dispatch)=>{
    let promise = dispatch(isAutoriseThunk());
    Promise.all([promise])
      .then(()=>{dispatch(initialize())})
    }
  

export default appReduser
