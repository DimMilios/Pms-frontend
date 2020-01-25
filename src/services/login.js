import axios from 'axios'

class LoginService {
  constructor() {
    if (!LoginService.instance) {
      LoginService.instance = this;
      this.baseUrl = `${process.env.REACT_APP_BACKEND}/login`;
      // this.baseUrl = 'http://localhost:8080/login'
      this.headers = {
        'content-type': 'application/json'
      }
    }

    return LoginService.instance;
  }

  async login(credentials) {
    const response = await axios.post(this.baseUrl, credentials, this.headers)
    return response.data
  }
}

const instance = new LoginService();
Object.freeze(instance);

export default instance;