import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import patientReducer from './reducers/patientReducer'
import authReducer from './reducers/authReducer'
import staffRegisterReducer from './reducers/staffRegisterReducer'
import appointmentReducer from './reducers/appointmentReducer'
// import patientRegisterReducer from './reducers/patientRegisterReducer'

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
  patients: patientReducer,
  user: authReducer,
  register: staffRegisterReducer,
  appointment: appointmentReducer,
  // patientRegister: patientRegisterReducer,
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enchancer = composeEnhancers(applyMiddleware(...middleware))
const store = createStore(reducers, initialState, enchancer)

export default store