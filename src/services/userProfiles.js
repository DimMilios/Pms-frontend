import axios from 'axios'

// // let instance = null;
// /**
//  * Singleton design pattern
//  */
// class UserProfileService {
//   constructor() {
//     if (!UserProfileService.instance) {
//       UserProfileService.instance = this;
//       // this.baseUrl = `/api/user-profiles`;
//       this.baseUrl = `${process.env.REACT_APP_BACKEND}/api/user-profiles`;
//       this.token = null;
//       this.config = {
//         headers: {
//           // 'content-type': 'application/json',
//           'Authorization': this.token
//         }
//       }
//     }

//     return UserProfileService.instance;
//   }

//   setToken(newToken) {
//     this.token = `bearer ${newToken}`;
//     console.log(this.token, newToken)
//   }

//   destroyToken() {
//     this.token = null;
//   }

//   async getAll() {
//     const response = await axios.get(this.baseUrl, this.config);
//     return response.data;
//   }

//   async create(profile) {
//     const response = await axios.post(this.baseUrl, profile, this.config);
//     return response.data;
//   }

//   async update(id, profile) {
//     const response = await axios.put(`${this.baseUrl}/${id}`, profile, this.config);
//     return response.data;
//   }

//   async remove(id) {
//     const response = await axios.delete(`${this.baseUrl}/${id}`);
//     return response.data;
//   }
// }

// const instance = new UserProfileService();
// // Object.freeze(instance);

// export default instance;

let token = null;
const baseUrl = `${process.env.REACT_APP_BACKEND}/api/user-profiles`;
const config = {
  headers: {
    // 'content-type': 'application/json',
    'Authorization': token
  }
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  console.log(token, newToken)
}

const destroyToken = () => token = null;

const getAll = async () => {
  const response = await axios.get(baseUrl, config);
  return response.data;
}

export default { setToken, destroyToken, getAll }