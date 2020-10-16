import React from 'react';
import s from './Header.module.css';
import Header from './Header'
import { connect } from 'react-redux';
import {logoutThunk} from '../../redux/authReduser'
import * as axios from 'axios'

class HeaderContainer extends React.Component{
  render(){
    return(
        <Header {...this.props} login={this.props.login}/>
    )}
}

let mapStateToProps=(state)=>({
  id:state.auth.id,
  login:state.auth.login,
  email:state.auth.email,
  isAutorised:state.auth.isAutorised
})

export default connect(mapStateToProps,{logoutThunk})(HeaderContainer)