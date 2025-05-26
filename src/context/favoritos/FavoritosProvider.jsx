import { useReducer, useEffect, useRef } from "react";
import { FavoritosContext } from "./FavoritosContext";
import { FavoritosService } from "./FavoritosService";
import { favoritosReducer } from "./favoritosReducer";
import { initialState } from "./initialState";
import { localStorageService } from "../../services/localStorageService";
import { isEqual } from "lodash";
import { useAuth } from "../../hooks/useAuth";

export const FavoritosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritosReducer, initialState);
  const ultimaVersaoSalva = useRef();
  const jaMesclouFavoritos = useRef(false); //Controla a mesclagem dos favoritos
  const { usuario } = useAuth();

  // Carregar favoritos ao montar
  useEffect(() => {
    const carregarFavoritos = async () => {
      if (usuario?.id) {
        if (jaMesclouFavoritos.current) return;

        try {
          const favoritosBackend = await FavoritosService.buscarFavoritos(
            usuario.id
          );
          const favoritosLocal = localStorageService.ler("favoritos") || [];
          let favoritosFinal = [...favoritosBackend];

          favoritosLocal.forEach((produtoLocal) => {
            const index = favoritosFinal.findIndex(
              (p) => p.id === produtoLocal.id
            );

            if (index > -1) {
              favoritosFinal[index].quantidade += produtoLocal.quantidade;
            } else {
              favoritosFinal.push(produtoLocal);
            }
          });

          dispatch({ type: "CARREGAR_FAVORITOS", payload: favoritosFinal });
          ultimaVersaoSalva.current = favoritosFinal;
          localStorageService.remover("favoritos");
          jaMesclouFavoritos.current = true;
        } catch (error) {
          console.error("Erro ao carregar favoritos do backend:", error);
        }
      } else {
        if (!state.favoritos.length) {
          const favoritosLocal = localStorageService.ler("favoritos") || [];
          dispatch({ type: "CARREGAR_FAVORITOS", payload: favoritosLocal });
          ultimaVersaoSalva.current = favoritosLocal;
        }
        jaMesclouFavoritos.current = false;
      }
    };

    carregarFavoritos();
  }, [usuario]); // Atualiza quando o usuário muda (login/logout)

  // Salvar favoritos sempre que mudar
  useEffect(() => {
    const salvarFavoritos = async () => {
      const favoritosAtual = state.favoritos;
      if (isEqual(favoritosAtual, ultimaVersaoSalva.current)) return;

      try {
        if (usuario?.id) {
          await FavoritosService.salvarFavoritos(usuario.id, favoritosAtual);
        } else {
          localStorageService.salvar("favoritos", favoritosAtual);
        }

        ultimaVersaoSalva.current = favoritosAtual;
      } catch (error) {
        console.error("Erro ao salvar favoritos", error);
      }
    };

    if (jaMesclouFavoritos.current) {
      salvarFavoritos();
    }
  }, [state.favoritos, usuario]); // Atualiza sempre que os favoritos mudam

  // Adicionar ou remover do favoritos
  const handleFavoritarProduto = (produto) => {
    const jaFavoritado = isFavoritado(produto);
    dispatch({ type: "ADICIONAR_REMOVER_FAVORITO", payload: produto });
    return jaFavoritado ? "removido" : "adicionado";
  };

  // Verificar se o produto já está favoritado
  const isFavoritado = (produto) => {
    return state.favoritos.some((favorito) => favorito.id === produto.id);
  };

  // Limpar favoritos
  const limparFavoritos = () => {
    if (state.favoritos.length === 0) {
      alert("Não há produtos favoritados!");
      return;
    }
    if (window.confirm("Deseja limpar os favoritos?")) {
      dispatch({ type: "LIMPAR_FAVORITOS" });
      if (!usuario?.id) {
        localStorageService.remover("favoritos");
      }
    }
  };

  // Sincronizar quando o usuário fizer login/logout
  useEffect(() => {
    if (!usuario?.id) {
      // Limpa os favoritos no localStorage quando o usuário deslogar
      localStorageService.remover("favoritos");
      dispatch({ type: "LIMPAR_FAVORITOS" });
    }
  }, [usuario]); // Executa quando o usuário faz login ou logout

  const haItensFavoritados = state.favoritos.length > 0;

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
