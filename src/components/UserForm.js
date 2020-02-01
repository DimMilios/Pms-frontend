import React from 'react'

import PersonalDetailsForm from './PersonalDetailsForm'
import UserDetailsForm from './UserDetailsForm'
import RegisterConfirm from './RegisterConfirm'

const UserForm = ({
  step,
  nextStep,
  previousStep,
  userProfile,
  setUserProfile,
  rest,
  setRest }) => {

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <UserDetailsForm
            step={step}
            nextStep={nextStep}
            previousStep={previousStep}
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        )
      case 2:
        return (
          <PersonalDetailsForm
            step={step}
            nextStep={nextStep}
            previousStep={previousStep}
            rest={rest}
            setRest={setRest}
          />
        )
      case 3:
        return (
          <RegisterConfirm />
        )
      default:
        return null
    }
  }

  return (
    <div>
      {renderForm()}
      {/* <div style={{ marginTop: 20, float: 'right' }}>
        {step > 1 &&
          <Button style={{ marginRight: 5 }} onClick={() => previousStep(step)}>Back</Button>
        }

        {step <= 3 &&
          <Button primary onClick={() => nextStep(step)}>Continue</Button>
        }
        {console.log('UserForm profile: ', userProfile)}
      </div> */}
    </div>
  )
}

export default UserForm