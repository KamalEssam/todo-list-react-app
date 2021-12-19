import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text'
                placeholder='Add your TODO'
                name='text'
                className='todo-input'
                value={input}
                onChange={handleChange}
            />
            <button className='todo-button'>Add TODO</button>
        </form>
    )
}

export default TodoForm

