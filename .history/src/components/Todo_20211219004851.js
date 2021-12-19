import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {AiFillCloseCircle} from 'react-icons/ri'
import {TiEdit} from 'react-icom/ti'

function Todo(todos) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key='todo.id' onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className='icon'>
            <AiFillCloseCircle />
            <TiEdit />
            </div>
        </div>
    ))
}

export default Todo

