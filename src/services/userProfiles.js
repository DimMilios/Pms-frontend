import axios from 'axios'

// let instance = null;
/**
 * Singleton design pattern
 */
class UserProfileService {
  constructor() {
    if (!UserProfileService.instance) {
      UserProfileService.instance = this;
      // this.baseUrl = `/api/user-profiles`;
      this.baseUrl = `${process.env.REACT_APP_BACKEND}/user-profiles`;
      this.headers = {
        'content-type': 'application/json'
      }
    }

    return UserProfileService.instance;
  }

  async getAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async create(profile) {
    const response = await axios.post(this.baseUrl, profile, this.headers);
    return response.data;
  }

  async update(id, profile) {
    const response = await axios.put(`${this.baseUrl}/${id}`, profile, this.headers);
    return response.data;
  }

  async remove(id) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}

const instance = new UserProfileService();
Object.freeze(instance);

export default instance;