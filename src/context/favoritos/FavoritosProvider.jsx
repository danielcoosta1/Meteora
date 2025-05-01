import { FavoritosContext } from "./FavoritosContext";

import { useReducer, useEffect, useRef } from "react";

import { favoritosReducer } from "./favoritosReducer";

import { initialState } from "./initialState";

import { localStorageService } from "../../services/localStorageService";
import { isEqual } from "lodash";

export const FavoritosProvider = ({ children }) => {
  // Usando useReducer para gerenciar o estado dos favoritos
  const [state, dispatch] = useReducer(favoritosReducer, initialState);

  const ultimaVersaoSalva = useRef();

  // 💾 Salva os favoritos no localStorage sempre que ele mudar
  useEffect(() => {
    if (!isEqual(ultimaVersaoSalva.current, state.favoritos)) {
      localStorageService.salvar("favoritos", state.favoritos);
      ultimaVersaoSalva.current = state.favoritos; // Atualiza a última versão salva
    }
  }, [state.favoritos]);

  // Função para adicionar ou remover produtos dos favoritos
  const handleFavoritarProduto = (produto) => {
    const jaFavoritado = isFavoritado(produto);

    dispatch({ type: "ADICIONAR_REMOVER_FAVORITO", payload: produto });

    return jaFavoritado ? "removido" : "adicionado";
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
