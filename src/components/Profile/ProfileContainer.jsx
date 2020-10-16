import React from 'react';
import s from './Profile.module.css'
import {connect} from 'react-redux';
import Profile from './Profile';
import {SetUserProfile,SetUserProfileThunk,SetProfileStatusThunk,UpdateProfileStatusThunk} from '../../redux/profileReduser'
import { withRouter } from 'react-router-dom';
import {WithRedirectComponent} from '../../HOC/withRedirect'
import { compose } from 'redux';
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component{
  componentDidMount(){
    // this.props.TogglePreloader(false)
    let userId=this.props.match.params.users;
    if (!userId){
      userId=11744
    }
    this.props.SetProfileStatusThunk(userId)
    this.props.SetUserProfileThunk(userId)
    debugger
  }
  render(){
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

let mapStateToProps=(state)=>{
  return{// posts: state.profileData.posts,
  // newPostText: state.profileData.newPostText,
  profile: state.profileData.profile,
  profileStatus: state.profileData.profileStatus,
  // isAutorised: state.auth.isAutorised,
}
}

export default compose(
  withRouter,
  connect(mapStateToProps,{SetUserProfile,SetUserProfileThunk,SetProfileStatusThunk,UpdateProfileStatusThunk})
  )(ProfileContainer)

// export default connect(mapStateToProps,{
//                                           // addPostAction,
//                                           // updateNewPostTextAction,
//                                           SetUserProfile,
//                                           SetUserProfileThunk
//                                           })(withRouter(ProfileContainer))