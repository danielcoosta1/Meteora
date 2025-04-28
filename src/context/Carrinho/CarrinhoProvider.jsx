import { useReducer, useEffect, useMemo } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

import { carrinhoReducer} from "./carrinhoReducer";

import { initialState } from "./initialState";

export const CarrinhoProvider = ({ children }) => {
  // Usando useReducer para gerenciar o estado do carrinho
  const [state, dispatch] = useReducer(carrinhoReducer, initialState);

  // 💾 Salva o carrinho no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(state.carrinho));
  }, [state.carrinho]);

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
