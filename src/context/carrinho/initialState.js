import { localStorageService } from "../../services/localStorageService";

const getCarrinhoInicial = () => {
  return localStorageService.ler("carrinho") || [];
};

export const initialState = {
  carrinho: getCarrinhoInicial(),
  menuAberto: false,
};
