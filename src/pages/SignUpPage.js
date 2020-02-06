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
      {!props.user.authenticated
        ? <UserForm
          step={props.step}
          userProfile={props.userProfile}
          nextStep={props.nextStep}
          previousStep={props.previousStep}
          setUserProfile={props.setUserProfile}
          setRest={props.setRest}
          rest={rest}
        />
        : <p>You already logged in</p>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  step: state.register.step,
  userProfile: state.register.userProfile,
  firstName: state.register.firstName,
  lastName: state.register.lastName,
  fatherName: state.register.fatherName,
  city: state.register.city,
  streetAddress: state.register.streetAddress,
  zipCode: state.register.zipCode,
  staffType: state.register.staffType,
  phoneNumbers: state.register.phoneNumbers
})

export default connect(mapStateToProps, {
  nextStep,
  previousStep,
  setUserProfile,
  setRest
})(SignUpPage)