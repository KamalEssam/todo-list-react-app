import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo() {

    const [edit ,setEdit]=useState({
        id
    })
    return (
        <div>
           <TodoForm /> 
        </div>
    )
}

export default Todo

