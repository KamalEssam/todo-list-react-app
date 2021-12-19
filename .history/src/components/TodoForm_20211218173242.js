import React, {useState} from 'react'

function TodoForm() {
    const [input , setInput]=useState('')
    return (
        <form>
            <input type='text'
             placeholder='Add your TODO'
             name='text'
             className='todo-input'
             value={input}
             />
             
        </form>
    )
}

export default TodoForm

