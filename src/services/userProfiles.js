import axios from 'axios'

// let instance = null;
/**
 * Singleton design pattern
 */
class UserProfileService {
  constructor() {
    if (!UserProfileService.instance) {
      UserProfileService.instance = this;
      this.baseUrl = `/api/user-profiles`;
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

  async create(userProfile) {
    const response = await axios.post(this.baseUrl, userProfile, this.headers);
    return response.data
  }

}

const instance = new UserProfileService();
Object.freeze(instance);

export default instance;