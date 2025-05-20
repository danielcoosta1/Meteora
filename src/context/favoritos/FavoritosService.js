// FavoritosService.js
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/favoritos`;

export const FavoritosService = {
  async buscarFavoritos(idUsuario) {
    const resposta = await axios.get(`${BASE_URL}/${idUsuario}`);
    return resposta.data?.produtos || [];
  },
  async salvarFavoritos(idUsuario, produtos) {
    return await axios.post(`${BASE_URL}/${idUsuario}`, { produtos });
  },
};
