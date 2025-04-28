// Função para obter os favoritos do localStorage
const getFavoritosFromLocalStorage = () => {
    const favoritosSalvos = localStorage.getItem("favorito");
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : []; // Retorna os favoritos salvos ou um array vazio
  };
  
  // Estado inicial do contexto
  export const initialState = {
    favoritos: getFavoritosFromLocalStorage(), // Carrega os favoritos salvos no localStorage
  };
  