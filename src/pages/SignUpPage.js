import React from 'react'

import { connect } from 'react-redux'

import { nextStep, previousStep, setUserProfile, setRest } from '../store/actions/staffRegisterActions'

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
  step: state.staffRegister.step,
  userProfile: state.staffRegister.userProfile,
  firstName: state.staffRegister.firstName,
  lastName: state.staffRegister.lastName,
  fatherName: state.staffRegister.fatherName,
  city: state.staffRegister.city,
  streetAddress: state.staffRegister.streetAddress,
  zipCode: state.staffRegister.zipCode,
  staffType: state.staffRegister.staffType,
  phoneNumbers: state.staffRegister.phoneNumbers
})

export default connect(mapStateToProps, {
  nextStep,
  previousStep,
  setUserProfile,
  setRest
})(SignUpPage)