import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
     const [todos, setTodos]=useState([])
    return (
        <div>
            <Tdo />
        </div>
    )
}

export default TodoList

