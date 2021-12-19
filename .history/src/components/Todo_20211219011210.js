import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {FaWindowClose} from 'react-icons/fa'
import {TiEdit} from 'react-icons/ti'

function Todo({todos,completeTodo,removeTodo,updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
 const submitUpdate= value =>{
     
 }
    
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key='todo.id' onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className='icon'>
            <FaWindowClose 
                onClick={()=> removeTodo(todo.id)}
                className='delete-icon'
             />
            <TiEdit 
                onClick={()=> setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'
             />
            </div>
        </div>
    ))
}

export default Todo

