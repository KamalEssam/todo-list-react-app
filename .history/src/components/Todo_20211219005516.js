import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {FaWindowClose} from 'react-icons/fa'
import {TiEdit} from 'react-icons/ti'

function Todo({todos,completeTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key='todo.id' onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className='icon'>
            <FaWindowClose 
                onClick={()=> removeTodo(todo.id)}
                className='delete'
             />
            <TiEdit />
            </div>
        </div>
    ))
}

export default Todo

