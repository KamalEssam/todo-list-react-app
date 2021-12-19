import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {AiFillCloseCircle} from 'react-icom/ri'
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
            
            </div>
        </div>
    ))
}

export default Todo

