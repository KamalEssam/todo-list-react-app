import React, {useState} from 'react'

function TodoForm() {
    const [input , setInput]=useState('')
    return (
        <form>
            <input type='text'
             placeholder='A'
             name='text'></input>
        </form>
    )
}

export default TodoForm

