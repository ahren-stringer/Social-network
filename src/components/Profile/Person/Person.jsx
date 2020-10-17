import React from 'react';
import Preloader from '../../common/PreLoader';
import s from './Person.module.css'
import PersonStatusHook from './PersonStatusHook';

const Person=(props)=>{
  if (!props.profile){
    return <Preloader/>
  }  
  else{
    // debugger
    return(
      <div>
        <div className={s.image}>
          <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'></img>
        </div>
        <PersonStatusHook status={props.status} UpdateProfileStatus={props.UpdateProfileStatus}/>
        <div>
          {props.profile.fullName}
        </div>
        <div>
          <img src={props.profile.photos.small} alt=""/>
        </div>
      </div>
  )}
}

export default Person