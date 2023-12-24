import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8081/',
  // Adicione outras configurações padrão, se necessário
});

export {api}