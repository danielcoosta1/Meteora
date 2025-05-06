import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Ajuste para o seu endpoint da API
});

export const FavoritosService = {
  buscarFavoritos: async (userId) => {
    const response = await api.get(`/favoritos/${userId}`);
    return response.data.produtos;
  },

  salvarFavoritos: async (userId, produtos) => {
    const response = await api.post(`/favoritos/${userId}`, { produtos });
    return response.data;
  },
};
