import React from 'react'
import { useState } from 'react'

const Edit = ({editTodo,task}) => {
const [val,setVal]=useState(task.task)

const handleSubmit=(e)=>{    
e.preventDefault()
editTodo(val,task.id)
setVal("")

}
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" className="todo-input" value={val}
     placeholder="Update task"
     onChange={(e)=>setVal(e.target.value)}
      />
    <button type="submit" className="todo-btn">
    Update Task
    </button>
  </form>
  )
}

export default Edit
