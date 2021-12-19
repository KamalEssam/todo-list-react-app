import React, {useState} from 'react'

function TodoList() {
     const [todos, setTodos]=useState([]);

     const addTodo = todo => {
         if(!todo.text || /^\s*$/.test(todo.text)){
             return
         }

         const newTodos= [todo, ...todos]

         __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED()
     }

    return (
        <div>
        <h1> what do you plane todo today?</h1>
            <TodoList />
        </div>
    )
}

export default TodoList

