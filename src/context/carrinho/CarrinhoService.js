// CarrinhoService.js
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/carrinho`;

export const CarrinhoService = {
  async buscarCarrinho(idUsuario) {
    const resposta = await axios.get(`${BASE_URL}/${idUsuario}`);
    return resposta.data?.produtos || [];
  },

  async salvarCarrinho(idUsuario, produtos) {
    return await axios.post(`${BASE_URL}/${idUsuario}`, { produtos });
  }
};
