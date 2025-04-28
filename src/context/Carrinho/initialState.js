import { localStorageService } from "../../services/localStorageService";

// Função para obter o carrinho salvo no localStorage
const getCarrinhoInicial = () => {
  return localStorageService.ler("carrinho") || [];
};

export const initialState = {
  carrinho: getCarrinhoInicial(), // Carrega o carrinho salvo no localStorage
  menuAberto: false,
};
