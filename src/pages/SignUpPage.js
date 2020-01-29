import React from 'react'

import { connect } from 'react-redux'

import { nextStep, previousStep } from '../store/actions/registerActions'

import MainNavigation from '../components/MainNavigation'
import UserForm from '../components/UserForm'

const SignUpPage = props => {
  return (
    <div>
      <MainNavigation />
      {console.log('SignUp page props: ', props.step)}
      <UserForm
        step={props.step}
        userProfile={props.userProfile}
        nextStep={props.nextStep}
        previousStep={props.previousStep}
      />
      {/* <button onClick={props.nextStep}>Continue</button>
      <button onClick={props.previousStep}>Back</button> */}
    </div>
  )
}

const mapStateToProps = state => ({
  step: state.signUp.step,
  userProfile: state.signUp.userProfile
})

export default connect(mapStateToProps, { nextStep, previousStep })(SignUpPage)