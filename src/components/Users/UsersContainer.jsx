import React from 'react';
import {SetUsersThunk,UnfollowThunk,FollowThunk} from '../../redux/usersReduser';
import {connect} from 'react-redux';
import Users from './Users';
import {WithRedirectComponent} from '../../HOC/withRedirect'
import { compose } from 'redux';

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.SetUsersThunk(this.props.numberOfPage,this.props.onOnePage)
    };
    onPageChange=(numberOfPage)=>{
        this.props.SetUsersThunk(numberOfPage,this.props.onOnePage)
    };
    render(){
        // if (!this.props.isAutorised) return <Redirect to='/login'/>
        return <Users onPageChange={this.onPageChange} {...this.props}/>
    };
}

let mapStateToProps=(state)=>{
    return{
        users: state.usersData.users,
        totalCount: state.usersData.totalCount,
        numberOfPage:state.usersData.numberOfPage,
        onOnePage:state.usersData.onOnePage,
        preloader:state.usersData.preloader,
        toggleIsFetching:state.usersData.toggleIsFetching,
        fetchingId: state.usersData.fetchingId
    }
};

export default compose(
    WithRedirectComponent,
    connect(mapStateToProps,{SetUsersThunk,FollowThunk,UnfollowThunk})
    )(UsersContainer)