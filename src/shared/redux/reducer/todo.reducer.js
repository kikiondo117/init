import { handleActions } from 'redux-actions'

const initState = {
  todos: [],
  currentTodo: '',
  isLoading: true,
  message: '',
}

export default handleActions(
  {
    ADD_TASK: (state, action) => {
      return {
        ...state,
        currentTodo: '',
        todos: state.todos.concat(action.payload)
      }
    },
    SHOW_TASKS: (state, action) => {
      return {
        ...state,
        currentTodo: '',
        todos: action.payload
      }
    }

  },
  initState
)