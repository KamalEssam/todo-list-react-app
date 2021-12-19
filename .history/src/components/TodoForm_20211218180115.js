import React, {useState} from 'react'

function TodoForm(props) {
    const [input , setInput]=useState('');

    const handleChange= e =>{
        setInput(e.target.value);
    };

    const handleSubmit= e =>{
        e.preventDefault();
    // props.onSubmit({
    //     id: Math.floor(Math.random * 1000),
    //     text: input
    // })
        
    }

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

