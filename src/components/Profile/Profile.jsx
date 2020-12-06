import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return <div className={s.profile}>
    <div>
      <img src='http://img.crazys.info/files/i/2012.5.6/1336315930_savv-4.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile