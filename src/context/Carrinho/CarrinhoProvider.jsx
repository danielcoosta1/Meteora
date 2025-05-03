import { useReducer, useEffect, useMemo, useRef } from "react";
import { isEqual } from "lodash";
import { CarrinhoContext } from "./CarrinhoContext";

import { carrinhoReducer } from "./carrinhoReducer";

import { initialState } from "./initialState";

import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

export const CarrinhoProvider = ({ children }) => {
  // Usando useReducer para gerenciar o estado do carrinho
  const [state, dispatch] = useReducer(carrinhoReducer, initialState);

  // Ref para armazenar a última versão salva do carrinho
  const ultimaVersaoSalva = useRef();

  const { usuario } = useAuth(); // assume que já está logado e tem `id` ou `userId`

  //Carrega o carrinho - busca os dados na API
  useEffect(() => {
    if (usuario === undefined) return; // Ainda carregando

    if (!usuario?.id) {
      // Se não estiver logado, limpar o carrinho local
      dispatch({ type: "LIMPAR_CARRINHO" });
      ultimaVersaoSalva.current = [];
      return;
    }

    const carregarCarrinho = async () => {
      try {
        const resposta = await axios.get(
          `http://localhost:3001/carrinho/${usuario.id}`
        );
        dispatch({
          type: "CARREGAR_CARRINHO",
          payload: resposta.data.produtos || [],
        });
        ultimaVersaoSalva.current = resposta.data.produtos;
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
      }
    };

    carregarCarrinho();
  }, [usuario]);

  // Salva no banco de dados sempre que o carrinho mudar
  useEffect(() => {
    const salvarCarrinho = async () => {
      if (!usuario?.id || isEqual(ultimaVersaoSalva.current, state.carrinho))
        return;

      try {
        await axios.post(`http://localhost:3001/carrinho/${usuario.id}`, {
          produtos: state.carrinho,
        });
        ultimaVersaoSalva.current = state.carrinho;
      } catch (error) {
        console.error("Erro ao salvar carrinho:", error);
      }
    };

    salvarCarrinho();
  }, [state.carrinho, usuario]);

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
  };

  // Calcula o total de preço e quantidade do carrinho
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
