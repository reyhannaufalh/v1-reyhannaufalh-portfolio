import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://v3421081.mhs.d3tiuns.com/api-portfolio/public/api/admin",
});

export { axiosInstance };
