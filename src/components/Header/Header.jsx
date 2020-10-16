import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header=(props)=>{
  debugger
    return(
    
        <header className={s.header}>
        <img src='https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg'></img>
       {
         props.isAutorised 
         ? <div>
           {props.login} <button onClick={()=>{props.logoutThunk()}}>Выход</button>
         </div>
         : <div>
           <NavLink to='/login'>
              Login
            </NavLink>
         </div>
       }
      </header>
    )
}

export default Header