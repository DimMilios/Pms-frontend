import React from 'react'
import { useField } from '../hooks'
import { Link } from 'react-router-dom'

import { Form, Button, Grid, Header, Message, Segment } from 'semantic-ui-react'
import MainNavigation from '../components/MainNavigation'

import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../store/actions/authActions'


const LoginPage = props => {
  const [username] = useField('text')
  const [password] = useField('password')

  const handleLogin = async (event) => {
    event.preventDefault()

    // try {
    const userData = {
      username: username.value,
      password: password.value
    }
    console.log(userData)
    props.loginUser(userData, props.history)
  }

  return (
    <>
      <MainNavigation />
      {props.user.authenticated ?
        <div>
          <h3>You are logged in.</h3>
          <Link to="/">Go back to Home page</Link>
          <Button onClick={props.logoutUser}>logout</Button>
        </div>
        :
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Log-in to your account
            </Header>
            <Form onSubmit={handleLogin} size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  name='username'
                  {...username}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  name='password'
                  {...password}
                />
                <Button
                  fluid
                  size='large'
                  primary
                  type="submit">Login</Button>
              </Segment>
            </Form>
            <Message>
              Don't have an account? <Link to='/signup'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      }
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { loginUser, logoutUser })(LoginPage)