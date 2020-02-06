import axios from 'axios';

let baseUrl = `${process.env.REACT_APP_BACKEND}/api/appointments`
let headers = {
  'Content-Type': 'application/json'
}

// /api/appointments?doctorId=2&ssn=59843&date=2020-06-23&time=14:00:00
const create = async (doctorId, ssn, date, time) => {
  if (doctorId < 1) return Promise.reject("Invalid doctorId")

  let queryUrl = `${baseUrl}?doctorId=${doctorId}&ssn=${ssn}&date=${date}&time=${time}`;

  console.log('create url: ', queryUrl);
  const response = await axios.post(queryUrl, {}, headers);
  return response.data;
}

// /appointments/doctor-availability?date=2020-02-03&time=15:30:00
const getAvailableDoctors = async (date, time) => {
  let queryUrl = `${baseUrl}/doctor-availability?date=${date}&time=${time}`;

  console.log('get url: ', queryUrl);
  const response = await axios.get(queryUrl, headers);
  return response.data;
}

export default { create, getAvailableDoctors }