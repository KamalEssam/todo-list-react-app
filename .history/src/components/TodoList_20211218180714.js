import React, {useState} from 'react'

function TodoList() {
     const [todos, setTodos]=useState([]);

     const addTodo = todo => {
         if(!todo.text || /^\s*$/.test(todo.text)){
             return
         }

         const newTodos= 
     }

    return (
        <div>
        <h1> what do you plane todo today?</h1>
            <TodoList />
        </div>
    )
}

export default TodoList

