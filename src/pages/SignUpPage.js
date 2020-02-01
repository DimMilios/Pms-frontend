import React from 'react'

import { connect } from 'react-redux'

import { nextStep, previousStep, setUserProfile, setRest } from '../store/actions/registerActions'

import MainNavigation from '../components/MainNavigation'
import UserForm from '../components/UserForm'

const SignUpPage = props => {
  const rest = {
    firstName: props.firstName,
    lastName: props.lastName,
    fatherName: props.fatherName,
    city: props.city,
    streetAddress: props.streetAddress,
    zipCode: props.zipCode,
    staffType: props.staffType,
    phoneNumbers: props.phoneNumbers
  }

  return (
    <div>
      <MainNavigation />
      <UserForm
        step={props.step}
        userProfile={props.userProfile}
        nextStep={props.nextStep}
        previousStep={props.previousStep}
        setUserProfile={props.setUserProfile}
        setRest={props.setRest}
        rest={rest}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  step: state.signUp.step,
  userProfile: state.signUp.userProfile,
  firstName: state.signUp.firstName,
  lastName: state.signUp.lastName,
  fatherName: state.signUp.fatherName,
  city: state.signUp.city,
  streetAddress: state.signUp.streetAddress,
  zipCode: state.signUp.zipCode,
  staffType: state.signUp.staffType,
  phoneNumbers: state.signUp.phoneNumbers
})

export default connect(mapStateToProps, {
  nextStep,
  previousStep,
  setUserProfile,
  setRest
})(SignUpPage)