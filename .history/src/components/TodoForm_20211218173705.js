import React, {useState} from 'react'

function TodoForm() {
    const [input , setInput]=useState('');

    const handelSubmit= (e) =>{
        e.preventDefault();
    
    }

    return (
        <form className='tpd'>
            <input type='text'
             placeholder='Add your TODO'
             name='text'
             className='todo-input'
             value={input}
             />
             <button className='todo-button'>Add TODO</button>
        </form>
    )
}

export default TodoForm

