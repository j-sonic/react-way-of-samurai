import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  // console.log(props.message)
  return (
    <div className={s.item}>
      <img src="https://yt3.ggpht.com/-jce8lr0gmCc/AAAAAAAAAAI/AAAAAAAAAAA/fH-EKYMG2CU/s900-c-k-no/photo.jpg" />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  )
}

export default Post