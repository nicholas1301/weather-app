import axios from "axios";

export const teleportApi = axios.create({
  baseURL: "https://api.teleport.org/api",
  timeout: 5000,
});
