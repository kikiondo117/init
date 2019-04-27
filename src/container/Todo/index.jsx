import React from 'react'
// Components
import Form from '../../components/Todo/Form.component'
import List from '../../components/Todo/List.component'
// Helpers
import helper from '../../helpers/todo.halper'
// * HOC
import Connect from '../../hoc/Connect.hoc'
// ! Redux actions
import { addTask } from '../../shared/redux/actions/todo.actions'

function App({ state, dispatch }) {

  const sendData = async (task) => {
    dispatch(addTask(await helper.addTaskHelper(task)))
    return null
  }

  return (
    <div>
      <Form sendData={sendData} />
      <List tasks={state.todo_store.todos} />
    </div>
  )
}

export default Connect(App)