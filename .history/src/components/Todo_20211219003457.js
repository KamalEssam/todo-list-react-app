import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo() {

    const [edit ,setEdit]=useState({
        id: null,
        value: ''
    });

    return todos.map((todo , index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' } key={index}>
            < dive
        </div>
    ))
}

export default Todo

