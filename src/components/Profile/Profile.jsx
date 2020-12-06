import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='http://www.nikatur31.ru/wp-content/uploads/2018/10/4.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile