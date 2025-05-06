import { useReducer, useEffect, useMemo, useRef } from "react";
import { isEqual } from "lodash";
import { CarrinhoContext } from "./CarrinhoContext";
import { carrinhoReducer } from "./carrinhoReducer";
import { initialState } from "./initialState";
import { useAuth } from "../../hooks/useAuth";
import { CarrinhoService } from "./CarrinhoService";
import { localStorageService } from "../../services/localStorageService";

export const CarrinhoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carrinhoReducer, initialState);
  const ultimaVersaoSalva = useRef();
  const jaMesclouCarrinho = useRef(false); // Controla a mesclagem do carrinho
  const { usuario } = useAuth();

  // Carregamento e mesclagem do carrinho
  useEffect(() => {
    const carregarCarrinho = async () => {
      if (usuario?.id) {
        if (jaMesclouCarrinho.current) return;

        try {
          const carrinhoBackend = await CarrinhoService.buscarCarrinho(
            usuario.id
          );
          const carrinhoLocal = localStorageService.ler("carrinho") || [];
          let carrinhoFinal = [...carrinhoBackend];

          carrinhoLocal.forEach((produtoLocal) => {
            const index = carrinhoFinal.findIndex(
              (p) => p.id === produtoLocal.id
            );
            if (index > -1) {
              carrinhoFinal[index].quantidade += produtoLocal.quantidade;
            } else {
              carrinhoFinal.push(produtoLocal);
            }
          });

          dispatch({ type: "CARREGAR_CARRINHO", payload: carrinhoFinal });
          ultimaVersaoSalva.current = carrinhoFinal;

          localStorageService.remover("carrinho");
          jaMesclouCarrinho.current = true;
        } catch (error) {
          console.error("Erro ao carregar carrinho do backend:", error);
        }
      } else {
        if (!state.carrinho.length) {
          const carrinhoLocal = localStorageService.ler("carrinho") || [];
          dispatch({ type: "CARREGAR_CARRINHO", payload: carrinhoLocal });
          ultimaVersaoSalva.current = carrinhoLocal;
        }
        jaMesclouCarrinho.current = false;
      }
    };

    carregarCarrinho();
  }, [usuario]);

  // Salvamento automático
  useEffect(() => {
    const salvarCarrinho = async () => {
      const carrinhoAtual = state.carrinho;

      if (isEqual(carrinhoAtual, ultimaVersaoSalva.current)) return;

      try {
        if (usuario?.id) {
          await CarrinhoService.salvarCarrinho(usuario.id, carrinhoAtual);
        } else {
          localStorageService.salvar("carrinho", carrinhoAtual);
        }

        ultimaVersaoSalva.current = carrinhoAtual;
      } catch (error) {
        console.error("Erro ao salvar carrinho:", error);
      }
    };

    if (jaMesclouCarrinho.current) {
      salvarCarrinho();
    }
  }, [state.carrinho, usuario]);

  // Ações
  const adicionarAoCarrinho = (produto) => {
    dispatch({ type: "ADICIONAR_PRODUTO", payload: produto });
  };

  const aumentarQuantidade = (id) => {
    dispatch({ type: "AUMENTAR_QUANTIDADE", payload: id });
  };

  const diminuirQuantidade = (id) => {
    dispatch({ type: "DIMINUIR_QUANTIDADE", payload: id });
  };

  const removerItem = (id) => {
    dispatch({ type: "REMOVER_ITEM", payload: id });
  };

  const limparCarrinho = () => {
    if (state.carrinho.length === 0) {
      alert("O carrinho já está vazio!");
      return;
    }
    if (window.confirm("Deseja limpar o carrinho?")) {
      dispatch({ type: "LIMPAR_CARRINHO" });
      if (!usuario?.id) {
        localStorageService.remover("carrinho");
      }
    }
  };

  const abrirMenu = () => {
    dispatch({ type: "TOGGLAR_MENU" });
  };

  const fecharMenu = () => {
    dispatch({ type: "TOGGLAR_MENU" });
  };

  const finalizarCompra = () => {
    if (state.carrinho.length === 0) {
      alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
      return;
    }

    alert("Compra finalizada com sucesso! 🎉");
    dispatch({ type: "FINALIZAR_COMPRA" });

    if (usuario?.id) {
      CarrinhoService.salvarCarrinho(usuario.id, []);
    } else {
      localStorageService.remover("carrinho");
    }

    ultimaVersaoSalva.current = [];
  };

  // **Adicionando a limpeza do carrinho no logout**
  useEffect(() => {
    if (!usuario?.id) {
      // Limpar carrinho do localStorage quando o usuário fizer logout
      localStorageService.remover("carrinho");
    }
  }, [usuario]);

  // Totais
  const { totalPreco, totalQuantidade } = useMemo(() => {
    return state.carrinho.reduce(
      (acc, item) => {
        acc.totalQuantidade += item.quantidade;
        acc.totalPreco += item.preco * item.quantidade;
        return acc;
      },
      { totalQuantidade: 0, totalPreco: 0 }
    );
  }, [state.carrinho]);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho: state.carrinho,
        menuAberto: state.menuAberto,
        totalPreco,
        totalQuantidade,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerItem,
        limparCarrinho,
        abrirMenu,
        fecharMenu,
        finalizarCompra,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
