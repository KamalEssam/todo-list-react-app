import React, {useState} from 'react'

function TodoForm(props) {
    const [input , setInput]=useState('');

    const handelSubmit= e =>{
        e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random * 1000),
        text: input
    })

    }

    return (
        <form className='todo-form' onSubmit={handelSubmit}>
            <input type='text'
             placeholder='Add your TODO'
             name='text'
             className='todo-input'
             value={input}
             onChange={h}
             />
             <button className='todo-button'>Add TODO</button>
        </form>
    )
}

export default TodoForm

