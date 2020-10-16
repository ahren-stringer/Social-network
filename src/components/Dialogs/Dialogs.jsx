import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import {updateNewMessageTextAction, addMessageAction} from '../../redux/dialogsReduser'

const Contact=(props)=>{
    let path='/dialog/'+props.id;
    return(
        <div className={s.contact}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message=(props)=>{
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}
const Dialogs=(props)=>{

    let textarea=React.createRef();

    let addMessage=()=>{
        props.dispatch(addMessageAction())
    }

    let onMessageChange=()=>{
        props.dispatch(updateNewMessageTextAction(textarea.current.value))
    }
    return(
       <div className={s.dialogs}>
           <div className={s.contacts}>
               {props.dialogs.contacts.map((item)=> <Contact id={item.id} name={item.name}/>)}
           </div>
            <div className={s.massages}>
                <div>{props.dialogs.messages.map((item)=> <Message message={item.message}/>)}
                </div>
                <div>
                    <div>
                        <textarea ref={textarea}
                                  onChange={onMessageChange}
                                  value={props.dialogs.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Dialogs