import React from 'react';

class PersonStatus extends React.Component{
    state={
        statusFlag: false,
        status:this.props.status
    }
    SpanStatus=()=>{
        this.setState({
            statusFlag: !this.state.statusFlag
        })
    }
    inputStatus=()=>{
        this.setState({
            statusFlag: !this.state.statusFlag
        })
        this.props.UpdateProfileStatus(this.state.status)
    }
    StatusChange=(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    // componentDidUpdate(prevProps,prevState){
    //     debugger
    //     if (prevProps.status!==this.props.status){
    //         this.setState({
    //             status:this.props.status
    //         })
    //     }

    // }

    render(){
        return <div>
        {
            (!this.state.statusFlag)
            ?<div>
                <span onDoubleClick={this.SpanStatus.bind(this)}>{this.state.status || '*****'}</span>
            </div>
            :<div>
                <input autoFocus={true} onBlur={this.inputStatus.bind(this)} value={this.state.status}
                        onChange={this.StatusChange}/>
            </div>
        }
        </div>
    }
}

export default PersonStatus