import { combineReducers } from 'redux'
// Reducer
import todo_store from './reducer/todo.reducer'

const ROOT_REDUCER = combineReducers({
  todo_store
})

export default ROOT_REDUCER