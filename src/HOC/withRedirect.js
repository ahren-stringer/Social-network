import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps=(state)=>{
    return{
        isAutorised: state.auth.isAutorised,
    }
};

export const WithRedirectComponent=(Component)=>{
    class WrapperComponent extends React.Component{
        render(){
            //debugger
            if (!this.props.isAutorised) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    
    return connect(mapStateToProps)(WrapperComponent)
}