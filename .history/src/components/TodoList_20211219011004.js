import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    // using use state by create const of todo 
    const [todos, setTodos] = useState([]);
    // ADD todo by passing todo
    const addTodo = todo => {

        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    };
    // here i create todo complete to change todo to completed
    const completeTodo = id => {
        let updatedTodo = todos.map(todo => {
            if (todo.id == id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodo);
    }
    // here i am remove to
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);

    }
    const updateTodo = (todoId, newValue) => {

        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    }

    return (
        <div>
            <h1> what do you plane todo today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
}



export default TodoList

