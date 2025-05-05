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
  const jaMesclouCarrinho = useRef(false); // Referência para controlar mesclagem
  const { usuario } = useAuth();

  // Carregar carrinho do localStorage se não houver usuário logado
  useEffect(() => {
    if (!usuario?.id) {
      const carrinhoLocal = localStorageService.ler("carrinho") || [];
      dispatch({ type: "CARREGAR_CARRINHO", payload: carrinhoLocal });
      ultimaVersaoSalva.current = carrinhoLocal;
    }
  }, [usuario]);

  // Carregar carrinho do backend e mesclar se necessário
  useEffect(() => {
    if (!usuario?.id || jaMesclouCarrinho.current) return; // Verifica se já foi mesclado

    const carregarCarrinhoComMesclagem = async () => {
      try {
        // Buscar carrinho salvo no backend
        const carrinhoSalvo = await CarrinhoService.buscarCarrinho(usuario.id);

        // Mesclando carrinho do backend com o carrinho local
        let carrinhoFinal = carrinhoSalvo;

        if (state.carrinho.length > 0) {
          // Mesclando produtos do carrinho local com o do backend
          const carrinhoMesclado = [...carrinhoSalvo];

          state.carrinho.forEach((produtoLocal) => {
            const index = carrinhoMesclado.findIndex(
              (p) => p.id === produtoLocal.id
            );
            if (index > -1) {
              carrinhoMesclado[index].quantidade += produtoLocal.quantidade;
            } else {
              carrinhoMesclado.push(produtoLocal);
            }
          });

          carrinhoFinal = carrinhoMesclado;
          // Salvar o carrinho mesclado no backend
          await CarrinhoService.salvarCarrinho(usuario.id, carrinhoMesclado);
          localStorageService.remover("carrinho");
        }

        // Atualizar estado com o carrinho final (mesclado ou não)
        dispatch({ type: "CARREGAR_CARRINHO", payload: carrinhoFinal });
        ultimaVersaoSalva.current = carrinhoFinal;
        jaMesclouCarrinho.current = true; // Marcar como mesclado
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
      }
    };

    carregarCarrinhoComMesclagem();
  }, [usuario, state.carrinho]); // Atualiza quando o usuário ou carrinho local muda

  // Sincronizar carrinho com backend ou localStorage
  useEffect(() => {
    const salvarCarrinho = async () => {
      if (usuario?.id) {
        // Evita salvar se não houver mudança no carrinho
        if (isEqual(ultimaVersaoSalva.current, state.carrinho)) return;
        try {
          // Salvar carrinho no backend
          await CarrinhoService.salvarCarrinho(usuario.id, state.carrinho);
          ultimaVersaoSalva.current = state.carrinho; // Atualiza a versão salva
        } catch (error) {
          console.error("Erro ao salvar carrinho:", error);
        }
      } else {
        // Se não estiver logado, salva no localStorage
        localStorageService.salvar("carrinho", state.carrinho);
      }
    };

    salvarCarrinho();
  }, [state.carrinho, usuario]); // Só sincroniza quando o carrinho ou o usuário muda

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
    const confirmar = window.confirm("Deseja limpar o carrinho?");
    if (confirmar) {
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
      ultimaVersaoSalva.current = [];
    } else {
      localStorageService.remover("carrinho");
    }
  };

  // Total
  const { totalPreco, totalQuantidade } = useMemo(() => {
    const resultado = state.carrinho.reduce(
      (acc, item) => {
        acc.totalQuantidade += item.quantidade;
        acc.totalPreco += item.preco * item.quantidade;
        return acc;
      },
      { totalQuantidade: 0, totalPreco: 0 }
    );
    return resultado;
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
