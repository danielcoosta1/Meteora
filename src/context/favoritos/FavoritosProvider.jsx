import { FavoritosContext } from "./FavoritosContext";
import { useReducer, useEffect, useRef } from "react";
import { favoritosReducer } from "./favoritosReducer";
import { initialState } from "./initialState";
import { localStorageService } from "../../services/localStorageService";
import { isEqual } from "lodash";

import { useAuth } from "../../hooks/useAuth";
import { FavoritosService } from "./FavoritosService";

export const FavoritosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritosReducer, initialState);
  const ultimaVersaoSalva = useRef();
    const { usuario } = useAuth();

  // 💾 Sincronizando favoritos com o backend
  useEffect(() => {
    const carregarFavoritos = async () => {
      if (!usuario?.id) {
        // Caso o usuário não esteja logado, só carrega favoritos do localStorage
        const favoritosLocal = localStorageService.ler("favoritos") || [];
        dispatch({ type: "CARREGAR_FAVORITOS", payload: favoritosLocal });
        ultimaVersaoSalva.current = favoritosLocal;
        return; // Não tenta carregar favoritos do backend
      }
  
      try {
        // Caso o usuário esteja logado, tenta buscar favoritos no backend
        const favoritosBackend = await FavoritosService.buscarFavoritos(usuario.id);
        const favoritosLocal = localStorageService.ler("favoritos") || [];
        let favoritosFinal = [...favoritosBackend];
  
        // Mescla os favoritos locais com os do backend, se necessário
        favoritosLocal.forEach((favoritoLocal) => {
          const index = favoritosFinal.findIndex((f) => f.id === favoritoLocal.id);
          if (index === -1) {
            favoritosFinal.push(favoritoLocal);
          }
        });
  
        dispatch({ type: "CARREGAR_FAVORITOS", payload: favoritosFinal });
        ultimaVersaoSalva.current = favoritosFinal;
        localStorageService.remover("favoritos");
      } catch (error) {
        console.error("Erro ao carregar favoritos do backend:", error);
      }
    };
  
    carregarFavoritos();
  }, [usuario]);
  

  // Salvando favoritos no backend
  useEffect(() => {
    const salvarFavoritos = async () => {
      if (isEqual(ultimaVersaoSalva.current, state.favoritos)) return;

      try {
        if (usuario?.id) {
          await FavoritosService.salvarFavoritos(usuario.id, state.favoritos);
        } else {
          localStorageService.salvar("favoritos", state.favoritos);
        }

        ultimaVersaoSalva.current = state.favoritos;
      } catch (error) {
        console.error("Erro ao salvar favoritos:", error);
      }
    };

    salvarFavoritos();
  }, [state.favoritos, usuario]);

  // Função para adicionar/remover do favoritos
  const handleFavoritarProduto = (produto) => {
    const jaFavoritado = isFavoritado(produto);
    dispatch({ type: "ADICIONAR_REMOVER_FAVORITO", payload: produto });
    return jaFavoritado ? "removido" : "adicionado";
  };

  // Verifica se o produto está favoritado
  const isFavoritado = (produto) => {
    return state.favoritos.some((favorito) => favorito.id === produto.id);
  };

  // Função para limpar favoritos
  const limparFavoritos = () => {
    const confirmar = window.confirm("Você tem certeza que deseja limpar todos os favoritos?");
    if (confirmar) {
      dispatch({ type: "LIMPAR_FAVORITOS" });
    }
  };

  // **Adicionando a limpeza dos favoritos no logout**
useEffect(() => {
  if (!usuario?.id) {
    // Limpar favoritos imediatamente após logout
    localStorageService.remover("favoritos"); // Remover favoritos do localStorage
    dispatch({ type: "LIMPAR_FAVORITOS" }); // Limpar favoritos do estado
  }
}, [usuario]);

  return (
    <FavoritosContext.Provider
      value={{
        handleFavoritarProduto,
        isFavoritado,
        favoritos: state.favoritos,
        limparFavoritos,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
