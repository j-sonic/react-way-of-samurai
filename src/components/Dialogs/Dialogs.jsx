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
  let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
    {id: 7, name: 'Stas'}
  ]
  let MessagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'So!'},
    {id: 5, message: 'Mo!'}
  ]
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={MessagesData[0].message}/>
        <Message message={MessagesData[1].message}/>
      </div>
    </div>
  )
}

export default Dialogs