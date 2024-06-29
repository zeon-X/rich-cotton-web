import axios from "axios";

// const api = "http://localhost:5001/api/v1";
const api = "https://rich-cotton-server-zeonx.onrender.com/api/v1";

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
