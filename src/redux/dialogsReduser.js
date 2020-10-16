import React from 'react';

let init={
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
};
let dialogsReduser=(state=init, action)=>{   
    switch(action.type){
        case 'SEND-MESSAGE':
          let message={
            id:6,
            message:state.newMessageText,
          };
          let contact={
            id:6,
            name: 'Pasha',
          };
         state.messages.push(message)
         state.contacts.push(contact)
          state.newMessageText='';
          return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
          state.newMessageText=action.newText;
          return state
        default:
        return state
};
};
export const addMessageAction=()=> ({
    type: 'SEND-MESSAGE'
  });
  
  export const updateNewMessageTextAction=(text)=> ({
    type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text
  });

export default dialogsReduser
