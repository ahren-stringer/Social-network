import {isAutoriseThunk} from './authReduser'

const INITIALIZED='app/INITIALIZED';

let init={
   initialized:false
};
let appReduser=(state=init, action)=>{   
    switch(action.type){
        case INITIALIZED:
         return{
           ...state,
           initialized:true
         }
        default:
        return state
};
};
export const initialize=()=> ({type: INITIALIZED});

export const initializedThunk=()=>
    (dispatch)=>{
    let promise = dispatch(isAutoriseThunk());
    Promise.all([promise])
      .then(()=>{dispatch(initialize())})
    }
  

export default appReduser
