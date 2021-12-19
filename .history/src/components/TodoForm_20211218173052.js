import React, {useState} from 'react'

function TodoForm() {
    const [input , setInput]=useState('')
    return (
        <form>
            <input type='text'
            
             name='text'></input>
        </form>
    )
}

export default TodoForm

