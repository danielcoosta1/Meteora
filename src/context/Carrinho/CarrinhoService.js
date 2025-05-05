// CarrinhoService.js
import axios from "axios";

const BASE_URL = "http://localhost:3001/carrinho";

export const CarrinhoService = {
  async buscarCarrinho(idUsuario) {
    const resposta = await axios.get(`${BASE_URL}/${idUsuario}`);
    return resposta.data?.produtos || [];
  },

  async salvarCarrinho(idUsuario, produtos) {
    return await axios.post(`${BASE_URL}/${idUsuario}`, { produtos });
  }
};
