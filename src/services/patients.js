import axios from 'axios';

class PatientService {
  constructor() {
    if (!PatientService.instance) {
      PatientService.instance = this;
      this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/patients`
    }
    return PatientService.instance;
  }

  async getAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  // http://localhost:8080/api/staff/username/:username
  async getByUsername(username) {
    const queryUrl = `${this.baseUrl}/username/${username}`;
    const response = await axios.get(queryUrl);
    return response.data;
  }

  async create(patient) {
    const response = await axios.post(this.baseUrl, patient);
    return response.data;
  }

  async update(ssn, patient) {
    const response = await axios.put(`${this.baseUrl}/${ssn}`, patient);
    return response.data;
  }

  async remove(ssn) {
    const response = await axios.delete(`${this.baseUrl}/${ssn}`);
    return response.data;
  }
}

const instance = new PatientService();
export default instance;