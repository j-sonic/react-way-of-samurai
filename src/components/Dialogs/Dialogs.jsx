import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return <div className={s.dialog +' ' + s.active}>
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
        <DialogItem name="Valera" id="6" />
        <DialogItem name="Stas" id="7" />
      </div>
      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="How is your it-kamasutra?"/>
        <Message message="Yo!"/>
        <Message message="So!"/>
      </div>
    </div>
  )
}

export default Dialogs