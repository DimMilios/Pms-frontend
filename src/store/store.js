import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import patientReducer from './reducers/patientReducer'
import authReducer from './reducers/authReducer'
import registerReducer from './reducers/registerReducer'

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
  patients: patientReducer,
  user: authReducer,
  signUp: registerReducer
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enchancer = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(reducers, initialState, enchancer)

export default store