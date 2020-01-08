import axios from 'axios'

/**
 * Singleton design pattern
 */
// class LoginService {
//   constructor() {
//     if (!LoginService.instance) {
//       LoginService.instance = this;
//       // this.baseUrl = `${process.env.REACT_APP_BACKEND}/login`;
//       this.baseUrl = 'http://localhost:8080/login'
//       // this.headers = {
//       //   'content-type': 'application/json'
//       // }
//     }

//     return LoginService.instance;
//   }

//   async login(credentials) {
//     // const response = await axios.post(this.baseUrl, {
//     //   username: credentials.username.value,
//     //   password: credentials.password.value,
//     // })
//     console.log(credentials)
//     const response = await axios.post(this.baseUrl, credentials, { 'content-type': 'application/json' })
//     return response.data
//   }
// }

// const instance = new LoginService();
// Object.freeze(instance);

// export default instance;

const baseUrl = `${process.env.REACT_APP_BACKEND}/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  console.log(credentials)
  return response.data
};

export default { login }