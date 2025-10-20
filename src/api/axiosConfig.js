import axios from "axios";

const instance = axios.create({
  // baseURL: "https://e-services-backend.vercel.app/api", // change to your backend URL in production
  baseURL : "http://localhost:5000/api",
  
});

export default instance;
