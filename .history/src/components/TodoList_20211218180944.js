import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
     const [todos, setTodos]=useState([]);

     const addTodo = todo => {
         if(!todo.text || /^\s*$/.test(todo.text)){
             return
         }

         const newTodos= [todo, ...todos]

         setTodos(newTodos)
     }

    return (
        <div>
        <h1> what do you plane todo today?</h1>
            <TodoForm onSubmit={addT} />
        </div>
    )
}

export default TodoList

