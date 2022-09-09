import React from 'react'
import '../css/Todolist.css'

export default function Todolist({ value, onChecet }) {
    console.log(value)
    return (
        <div>{value.map((el, i) => (
            <div className={"todoList"} key={`todoList id ${i}`}>
                <div style={el.activ === true ? { textDecoration: "line-through" } : { color: "black" }}>{el.text}</div>
                <input type="checkbox" checked={el.activ} onChange={(e) => onChecet(el.id)} />
            </div>
        ))}</div>
    )
}
