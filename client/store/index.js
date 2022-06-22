import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import singleUserReducer from './user'
import huesReducer from './allHues'
import singleHueReducer from './singleHue'
import usersReducer from './allUsers'
import selectedColorFamilyReducer from './colorFamily'

const reducer = combineReducers({
  user: singleUserReducer,
  hues: huesReducer,
  hue: singleHueReducer,
  users: usersReducer,
  hueColorFamily: selectedColorFamilyReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
