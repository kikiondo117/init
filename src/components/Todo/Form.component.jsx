import React, { useRef } from 'react'

function Form({ sendData }) {
  const task = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    sendData(task.current.value)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input ref={task} name='task' type="text" />
      <button>Agregar tarea</button>
    </form>
  )
}

export default Form