import axios from 'axios'

// // let instance = null;
// /**
//  * Singleton design pattern
//  */
class UserProfileService {
  constructor() {
    if (!UserProfileService.instance) {
      UserProfileService.instance = this;
      this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/user-profiles`;
      this.config = {};
    }

    return UserProfileService.instance;
  }

  getConfig() {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    const user = JSON.parse(loggedUserJSON);

    return {
      headers: {
        Authorization: user,
      }
    }
  }

  async getAll() {
    const response = await axios.get(this.baseUrl, this.getConfig());
    return response.data;
  }

  async create(profile) {
    const response = await axios.post(this.baseUrl, profile, this.config);
    return response.data;
  }

  async update(id, profile) {
    const response = await axios.put(`${this.baseUrl}/${id}`, profile, this.config);
    return response.data;
  }

  async remove(id) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}

const instance = new UserProfileService();
// Object.freeze(instance);

export default instance;