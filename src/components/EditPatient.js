import React from 'react'
import { connect } from 'react-redux'
import { USERNAME_REGEX } from '../shared/constants'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { Redirect } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

import userProfileService from '../services/userProfiles'

const EditSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(USERNAME_REGEX, 'Invalid username!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid Email!')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  repeatPwd: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords much match!')
    .required('Required'),
})

const EditPatient = ({ patient, patient: { userProfile } }) => {

  const editUserDetailsTogglable = () => (
    <div>
      <Formik
        initialValues={{
          username: userProfile.username || '',
          email: userProfile.email || '',
          password: '',
          repeatPwd: '',
        }}
        validationSchema={EditSchema}
        onSubmit={async values => {

          if (values.repeatPwd !== values.password) { console.log('passwords dont match') }

          const userData = {
            username: values.username,
            email: values.email,
            password: values.password,
            role: 'USER'
          }

          console.log('Userdata: ', userData)
          await userProfileService.update(userProfile.id, userData)
        }}
      >

        {({ errors, touched, getFieldProps, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>

            <Form.Input
              label="Username"
              name="username"
              placeholder="username"
              error={errors.username && touched.username ? {
                content: errors.username,
                pointing: 'below'
              } : null}
              {...getFieldProps('username')}
            />

            <Form.Input
              label="Email"
              name="email"
              placeholder="email"
              error={errors.email && touched.email ? {
                content: errors.email,
                pointing: 'below'
              } : null}
              {...getFieldProps('email')}
            />

            <Form.Input
              label="Password"
              type="password"
              name="password"
              placeholder="password"
              error={errors.password && touched.password ? {
                content: errors.password,
                pointing: 'below'
              } : null}
              {...getFieldProps('password')}
            />

            <Form.Input
              label="Repeat password"
              type="password"
              name="repeatPwd"
              placeholder="Repeat password"
              error={errors.repeatPwd && touched.repeatPwd ? {
                content: errors.repeatPwd,
                pointing: 'below'
              } : null}
              {...getFieldProps('repeatPwd')}
            />

            <div style={{ marginTop: 20, float: 'right' }}>
              <Form.Button primary type='submit'>
                Update
              </Form.Button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )

  if (patient === null) return (<Redirect to="/services" />)

  return (
    <div>
      {editUserDetailsTogglable()}
    </div>
  )
}

const mapStateToProps = state => ({
  patient: state.patients.patient
})

export default connect(mapStateToProps, {

})(EditPatient)