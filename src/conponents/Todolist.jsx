import React from 'react'
import '../css/Todolist.css'

export default function Todolist(props) {
    return (
        <div>{props.value.map((el) => (

            <div className={"todoList"} key={`texti id ${el.id}`}>{el.text} {el.activ}<input type="checkbox" /></div>
        ))}</div>
    )
}
