import React, { useState } from 'react'
import Todoinput from './Todoinput'
import Todolist from './Todolist'

export default function Home() {

    const [todo, poxelTodo] = useState([]);

    function inputValu(value) {
        poxelTodo([
            ...todo,
            {
                text: value,
                id: Math.random(),
                activ: false
            }
        ])
    }

    function onChecet(id) {
        poxelTodo(todo.map((el) => {
            if (el.id == id) return { ...el, activ: !el.activ }
            return el
        }))
    }

    function clearChecet() {
        poxelTodo(todo.filter((el) => !el.activ));
    }
    return (
        <div>
            <Todoinput onHendlChenge={inputValu} onClearChecet={clearChecet} />
            <Todolist value={todo} onChecet={onChecet} />
        </div>
    )
}
