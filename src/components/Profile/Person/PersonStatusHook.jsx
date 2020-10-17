import React from 'react';
import { useState } from 'react';

const PersonStatusHook=(props)=>{
    let [statusFlag, setStatusFlag]=useState(false);
    let [status, setStatus]=useState(props.status);
    let SpanStatus=()=>{
        setStatusFlag(true)
    }
    let inputStatus=()=>{
        setStatusFlag(false)
        props.UpdateProfileStatus(status)
    }
    let StatusChange=(e)=>{
        setStatus(e.currentTarget.value)
    }

    // componentDidUpdate(prevProps,prevState){
    //     debugger
    //     if (prevProps.status!==this.props.status){
    //         this.setState({
    //             status:this.props.status
    //         })
    //     }

    // }

        return <div>
        {
            (!statusFlag)
            ?<div>
                <span onDoubleClick={SpanStatus}>{props.status || '*****'}</span>
            </div>
            :<div>
                <input autoFocus={true} onBlur={inputStatus} value={status}
                        onChange={StatusChange}/>
            </div>
        }
        </div>
}

export default PersonStatusHook