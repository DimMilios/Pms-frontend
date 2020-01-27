import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import patientReducer from './reducers/patientReducer'

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
  patients: patientReducer
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enchancer = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(reducers, initialState, enchancer)

export default store