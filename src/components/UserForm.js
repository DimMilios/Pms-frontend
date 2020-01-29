import React from 'react'

// import { connect } from 'react-redux'

// import { nextStep, previousStep } from '../store/actions/registerActions'

import PersonalDetailsForm from './PersonalDetailsForm'
import UserDetailsForm from './UserDetailsForm'
import RegisterConfirm from './RegisterConfirm'

import { Button } from 'semantic-ui-react'

const UserForm = ({ step, userProfile, nextStep, previousStep }) => {
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <UserDetailsForm userProfile={userProfile} />
        )
      case 2:
        return (
          <PersonalDetailsForm />
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
      {console.log({ userProfile, step })}

      <div style={{ marginTop: 20, float: 'right' }}>
        {step > 1 ?
          <Button style={{ marginRight: 5 }} onClick={() => previousStep()}>Back</Button>
          : null
        }

        {step <= 3 ?
          <Button primary onClick={() => nextStep()}>Continue</Button>
          : null
        }
      </div>
    </div>
  )
}

// const mapStateToProps = state => ({
//   step: state.step,
//   userProfile: state.useProfile
// })

// export default connect(mapStateToProps, { nextStep, previousStep })(UserForm)
export default UserForm