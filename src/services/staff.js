import axios from 'axios'

/**
 * Singleton design pattern
 */
class StaffService {
  constructor() {
    if (!StaffService.instance) {
      StaffService.instance = this;
      // this.baseUrl = `/api/staff`;
      this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/staff`;
      this.headers = {
        'content-type': 'application/json'
      }
    }

    return StaffService.instance;
  }

  async getAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async create(staff) {
    const response = await axios.post(this.baseUrl, staff, this.headers);
    return response.data;
  }

  async update(id, staff) {
    const response = await axios.put(`${this.baseUrl}/${id}`, staff, this.headers);
    return response.data;
  }

  async remove(id) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}

const instance = new StaffService();
Object.freeze(instance);

export default instance;