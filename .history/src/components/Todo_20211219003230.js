import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo() {

    const [edit ,setEdit]=useState({
        id: null,
        value: ''
    });

    return todp.map((todo , index)=>(
        <div className={todo.isCo}></div>
    ))
}

export default Todo

