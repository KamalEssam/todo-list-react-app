import React, {useState} from 'react'

function TodoList() {
     const [todos, setTodos]=useState([]);

    return (
        <div>
        <h1> what do you plane todotoday?</h1>
            <TodoList />
        </div>
    )
}

export default TodoList

