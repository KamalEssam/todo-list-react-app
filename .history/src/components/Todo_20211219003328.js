import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo() {

    const [edit ,setEdit]=useState({
        id: null,
        value: ''
    });

    return todp.map((todo , index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' } key={}></div>
    ))
}

export default Todo

