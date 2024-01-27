import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5501",
  withCredentials: true, // store cookies in browser
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
