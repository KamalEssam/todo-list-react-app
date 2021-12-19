import React, {useState} from 'react'

function TodoForm() {
    const [input , setInput]=useState('');

    const handelSubmit= (e) =>{

    }

    return (
        <form>
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

