import { FavoritosContext } from "./FavoritosContext";

import { useReducer, useEffect } from "react";

import { favoritosReducer} from "./favoritosReducer";

import { initialState } from "./initialState";

export const FavoritosProvider = ({ children }) => {
  // Usando useReducer para gerenciar o estado dos favoritos
  const [state, dispatch] = useReducer(favoritosReducer, initialState);

  // 💾 Salva os favoritos no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("favorito", JSON.stringify(state.favoritos));
  }, [state.favoritos]);

  // Função para adicionar ou remover produtos dos favoritos
  const handleFavoritarProduto = (produto) => {
    dispatch({ type: "ADICIONAR_REMOVER_FAVORITO", payload: produto });
  };

  // Verifica se o produto está favoritado
  const isFavoritado = (produto) => {
    return state.favoritos.some((favorito) => favorito.id === produto.id);
  };

  // Verifica se há itens favoritados
  const haItensFavoritados = state.favoritos.length > 0;

  // Função para limpar os favoritos
  const limparFavoritos = () => {
    const confirmar = window.confirm(
      "Você tem certeza que deseja limpar todos os favoritos?"
    );
    if (confirmar) {
      dispatch({ type: "LIMPAR_FAVORITOS" });
    }
  };

  return (
    <FavoritosContext.Provider
      value={{
        handleFavoritarProduto,
        isFavoritado,
        favoritos: state.favoritos,
        limparFavoritos,
        haItensFavoritados,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
