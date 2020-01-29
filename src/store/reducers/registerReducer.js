import {
  REGISTER_NEXT,
  REGISTER_PREV,
} from '../types'

const initialState = {
  step: 1,
  userProfile: {
    username: '',
    password: '',
    email: '',
    role: '',
  },
  firstName: '',
  lastName: '',
  fatherName: '',
  occupation: '',
  city: '',
  streetAddress: '',
  zipCode: '',
  phoneNumbers: []
}

function stepCounter(state = 1, action) {
  switch (action.type) {
    case REGISTER_NEXT:
      return state + 1
    case REGISTER_PREV:
      return state - 1
    default:
      return state
  }
}

function userProfile(state, action) {
  switch (action.type) {
    case REGISTER_NEXT:
      return {
        ...action.payload.userProfile
      }
    case REGISTER_PREV:
      return {
        ...action.payload.userProfile
      }
    default:
      return state
  }
}

export default function register(state = initialState, action) {

  return {
    ...state,
    // step: stepCounter(state.step, action),
    userProfile: userProfile({ userProfile: state.userProfile }, action)
    // todos: todos(state.todos, action)
  }
}

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case REGISTER_NEXT:
//       console.log('NEXT STEP')
//       return {
//         ...state,
//         step: action.step.step + 1
//       }
//     case REGISTER_PREV:
//       console.log('PREV STEP', action.step.step)
//       return {
//         ...state,
//         step: action.step.step - 1
//       }
//     default:
//       return state
//   }
// }
