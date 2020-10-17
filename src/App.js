import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initializedThunk} from './redux/appReduser.js'
import Preloader from './components/common/PreLoader';

class App extends React.Component {
  componentDidMount(){
    this.props.initializedThunk()
  };
  render(){
    if (!this.props.isInitialized) return <Preloader/>
    return (
      <React.Fragment>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className='app-content'>
          <Route path='/profile/:users?' render={()=><ProfileContainer/>}/>
          <Route path='/dialogs' render={()=> <Dialogs/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/users' render={()=><UsersContainer/>}/>
          <Route path='/login' render={()=><Login/>}/>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

let mapStateToProps=(state)=>{
  return{
    isInitialized: state.app.initialized
  }
};
 
export default compose(
                        withRouter,
                        connect(mapStateToProps,{initializedThunk})
                      )(App);
