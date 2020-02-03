import axios from 'axios'

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
    this.setBaseUrl(staff);
    const response = await axios.post(this.baseUrl, staff, this.headers);
    return response.data;
  }

  async update(id, staff) {
    this.setBaseUrl(staff);
    const response = await axios.put(`${this.baseUrl}/${id}`, staff, this.headers);
    return response.data;
  }

  async remove(staff) {
    this.setBaseUrl(staff);
    const { id } = staff;
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }

  setBaseUrl(staff) {
    const { staffType } = staff;
    switch (staffType) {
      case 'Lab Staff':
        this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/lab-staff`;
        break;
      case 'Doctor':
        this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/doctors`;
        break;
      case 'Receptionist':
        this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/receptionists`;
        break;
      case 'Payment Staff':
        this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/payment-staff`;
        break;
      default:
        this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/staff`;
    }
  }
}

const instance = new StaffService();

export default instance;