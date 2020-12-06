import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
  return <nav className={s.nav}>
    <ul>
      <li className={s.item}><a href="#s">Profile</a></li>
      <li className={`${s.item} ${s.active}`}><a href="#s">Messages</a></li>
      <li className={s.item}><a href="#s">News</a></li>
      <li className={s.item}><a href="#s">Music</a></li>
      <li className={s.item}><a href="#s">Settings</a></li>
    </ul>
  </nav>
}

export default Navbar