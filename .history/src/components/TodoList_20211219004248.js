import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {

        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    };



    return (
        <div>
            <h1> what do you plane todo today?</h1>
            <TodoForm onSubmit={addTodo}  />
            <Todo 
                todos={todos},
                
            />
        </div>
    )
}

export default TodoList

