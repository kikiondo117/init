import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// ! Redux files configuration
import rootReducer from './root_reducer.reducer'
import logger from 'redux-logger'

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)))
}