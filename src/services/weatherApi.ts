import axios from "axios";

export const weatherApiKey = "f56b16a52dfea3cbbfb4b3a6305e7fd1";

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 5000,
});
