import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='http://img.crazys.info/files/i/2012.5.6/1336315930_savv-4.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo