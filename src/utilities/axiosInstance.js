import axios from "axios";

const api = "http://localhost:5000/api/v1";
// const api =
//   "http://9o6amhx790.execute-api.me-central-1.amazonaws.com/production/api/v1";

// const token = window.localStorage.getItem("token");
// console.log(token);

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    // Authorization: token ? `Bearer ${token}` : "",

    "Content-Type": "application/json", // Ensure it's set to JSON
  },
});

// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//       localStorage.clear();
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
