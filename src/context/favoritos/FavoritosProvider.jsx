import { FavoritosContext } from "./FavoritosContext";

import { useReducer, useEffect } from "react";

// Definindo o reducer para gerenciar as ações de favoritos
const favoritosReducer = (state, action) => {
  switch (action.type) {
    case "ADICIONAR_REMOVER_FAVORITO": {
      const produtoExistente = state.favoritos.find(
        (favorito) => favorito.id === action.payload.id
      );

      if (produtoExistente) {
        return {
          ...state,
          favoritos: state.favoritos.filter(
            (favorito) => favorito.id !== action.payload.id
          ),
        };
      } else {
        return {
          ...state,
          favoritos: [...state.favoritos, action.payload],
        };
      }
    }

    case "LIMPAR_FAVORITOS":
      return { ...state, favoritos: [] };

    default:
      return state;
  }
};

// Função para obter os favoritos do localStorage
const getFavoritosFromLocalStorage = () => {
  const favoritosSalvos = localStorage.getItem("favorito");
  return favoritosSalvos ? JSON.parse(favoritosSalvos) : []; // Retorna os favoritos salvos ou um array vazio
};

// Estado inicial do contexto
const initialState = {
  favoritos: getFavoritosFromLocalStorage(), // Carrega os favoritos salvos no localStorage
};

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
