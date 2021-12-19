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

const completeTodo= id =>{
    let updatedTodo= todos.map({
        if (todo.id == )
    }

    )
    
}

    return (
        <div>
            <h1> what do you plane todo today?</h1>
            <TodoForm onSubmit={addTodo}  />
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
            />
        </div>
    )
}

export default TodoList

