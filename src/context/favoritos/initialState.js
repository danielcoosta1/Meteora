import { localStorageService } from "../../services/localStorageService";

const getFavoritosInicial = () => {
  return localStorageService.ler("favoritos") || [];
};

export const initialState = {
  favoritos: getFavoritosInicial(), // Carrega os favoritos salvos no localStorage
};
