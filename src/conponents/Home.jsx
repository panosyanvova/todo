import React, { useState } from 'react'
import Todoinput from './Todoinput'
import Todolist from './Todolist'

export default function Home() {

    const [todo, poxelTodo] = useState([])

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



    console.log(todo);
    return (
        <div>
            <Todoinput onHendlChenge={inputValu} />
            <Todolist value={todo} />
        </div>
    )
}
