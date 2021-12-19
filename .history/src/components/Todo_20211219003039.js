import React, {useState} from 'react'
import TodoForm from './TodoForm'

function Todo() {

    const [edit ,setEdit]=useState({
        id: null,
        val
    })
    return (
        <div>
           <TodoForm /> 
        </div>
    )
}

export default Todo

