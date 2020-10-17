import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PersonStatusHook=(props)=>{
    let [statusFlag, setStatusFlag]=useState(false);
    let [status, setStatus]=useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status]);

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

        return <div>
        {
            (!statusFlag)
            ?<div>
                <span onDoubleClick={SpanStatus}>{status || '*****'}</span>
            </div>
            :<div>
                <input autoFocus={true} onBlur={inputStatus} value={status}
                        onChange={StatusChange}/>
            </div>
        }
        </div>
}

export default PersonStatusHook