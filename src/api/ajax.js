import axios from "axios";

const ajax = axios.create({
  baseURL: "/",
  timeout: 20000,
});
export default ajax;
