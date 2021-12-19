import React, {useState} from 'react'

function TodoForm() {
    const [input , setInput]=useState('')
    return (
        <form>
            <input name='text'></input>
        </form>
    )
}

export default TodoForm

