import React from 'react';
import Preloader from '../../common/PreLoader';
import s from './Person.module.css'
import PersonStatusHook from './PersonStatusHook';
import userImg from '../../../assets/img/userImg.jpg'

const Person = (props) => {
  const addAva=(e)=>{
    if (e.target.files.length) props.UpdateAvaThunk(e.target.files[0])
  };
  if (!props.profile) {
    return <Preloader />
  }
  else {
    return (
      <div>
        <div className={s.image}>
          <img src={props.profile.photos.large || userImg} alt="" />
        </div>
        <div>
          {props.isOwner && <input type="file" onChange={addAva}/>}
        </div>
        <PersonStatusHook status={props.status} UpdateProfileStatus={props.UpdateProfileStatus} />
        <div>
          {props.profile.fullName}
        </div>
      </div>
    )
  }
}

export default Person