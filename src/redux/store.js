import dialogsReduser from "./dialogsReduser"
import profileReduser from "./profileReduser"

let store={
  _rerenderEntireTree: ()=>{},
  _state:{
    profileData:{
      posts:[
        {id:1,name:'John', message:'Hi'},
        {id:2,name:'Lennon', message:'Im the warlus'},
      ],
      newPostText: '12345',
    },
    dialogsData:{
      contacts:[
        {id:1,name:'Vova'},
        {id:2,name:'Sasha'},
        {id:3,name:'Pidor'},
        {id:4,name:'Lelya'},
        {id:5,name:'Fill'},
      ],
      messages:[
        {id:1,message:'Hello'},
        {id:2,message:'Hell'},
        {id:3,message:'Hel'},
        {id:4,message:'He'},
        {id:5,message:'H'},
      ],
      newMessageText:'1234',
    },
  },
  getState(){
    return this._state
  },
  setState(value){
    this._state=value
  },

  dispatch(action){
    this._state.profileData=profileReduser(this._state.profileData,action);
    this._state.dialogsData=dialogsReduser(this._state.dialogsData,action);
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer){
    this._rerenderEntireTree=observer
  },
}


export default store

window.store=store //глобальное сохранение store