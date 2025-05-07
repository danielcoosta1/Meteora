// FavoritosService.js
import axios from "axios";

const BASE_URL = "http://localhost:3001/favoritos";

export const FavoritosService = {
  async buscarFavoritos(idUsuario) {
    const resposta = await axios.get(`${BASE_URL}/${idUsuario}`);
    return resposta.data?.produtos || [];
  },
  async salvarFavoritos(idUsuario, produtos) {
    return await axios.post(`${BASE_URL}/${idUsuario}`, { produtos });
  },
};
