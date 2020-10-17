import { authAPI } from '../api/api';

const AUTORISE ='auth/AUTORISE';

let init={
   id:null,
   login:null,
   email:null,
   isAutorised:false
};
let authReduser=(state=init, action)=>{   
    switch(action.type){
        case AUTORISE:
         return{
           ...state,
           ...action.payload,
           isAutorised:action.payload.isAutorised
         }
        default:
        return state
};
};
export const autorise=(id,login,email,isAutorised)=> ({type: AUTORISE, payload:{id,login,email,isAutorised}});

export const isAutoriseThunk=()=>
    async (dispatch)=>{
      let response= await authAPI.isAutorised()

      if (response.data.resultCode==0){
        let {id,login, email}=response.data.data;
        return dispatch(autorise(id,login,email,true))
      }
  }

export const loginThunk=(email,password,rememderMe)=>
  async (dispatch)=>{
    let response= await authAPI.login(email,password,rememderMe)

    if (response.data.resultCode==0){
      dispatch(isAutoriseThunk())
    }
}

export const logoutThunk=()=>
  async (dispatch)=>{
    let response= await authAPI.logout()

    if (response.data.resultCode==0){
      dispatch(autorise(null,null,null,false))
    }
}

export default authReduser
