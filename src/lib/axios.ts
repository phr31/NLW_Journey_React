import axios from "axios";

export const api = axios.create({
  baseURL: 'https://nlw-journey-node-js.vercel.app',
});
