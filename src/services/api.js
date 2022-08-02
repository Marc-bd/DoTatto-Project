import axios from "axios";

const api = axios.create({
  baseURL: "https://dotattoo.herokuapp.com",
});

export const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
