import { useReducer, useEffect, useMemo } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

// Definindo o reducer para gerenciar as ações do carrinho
const carrinhoReducer = (state, action) => {
  switch (action.type) {
    // A CASE ESTÁ ENVOLVIDA COM AS CHAVES {} POR BOA PRATICA; 
    // ELA SÓ É ACESSADA EXCLUSIVAMENTE DENTRO DA CASE ADICIONAR_PRODUTO;
    // NÃO PODENDO SER "VAZADA" EM OUTRA CASE OU FORA DO SWITCH.
    // ISSO GARANTE QUE O CÓDIGO SEJA MAIS ORGANIZADO E EVITA ERROS DE ESCOPOS.
    case "ADICIONAR_PRODUTO": {
      const produtoExistente = state.carrinho.find(
        (item) => item.id === action.payload.id
      );
      if (produtoExistente) {
        return {
          ...state,
          carrinho: state.carrinho.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          carrinho: [...state.carrinho, { ...action.payload, quantidade: 1 }],
        };
      }
    }
    case "AUMENTAR_QUANTIDADE":
      return {
        ...state,
        carrinho: state.carrinho.map((item) =>
          item.id === action.payload
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        ),
      };
    case "DIMINUIR_QUANTIDADE": {
      const itemParaDiminuir = state.carrinho.find(
        (item) => item.id === action.payload
      );
      if (itemParaDiminuir.quantidade === 1) {
        return {
          ...state,
          carrinho: state.carrinho.filter((item) => item.id !== action.payload),
        };
      }
      return {
        ...state,
        carrinho: state.carrinho.map((item) =>
          item.id === action.payload
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        ),
      };
    }
    case "REMOVER_ITEM":
      return {
        ...state,
        carrinho: state.carrinho.filter((item) => item.id !== action.payload),
      };
    case "LIMPAR_CARRINHO":
      return { ...state, carrinho: [] };
    case "TOGGLAR_MENU":
      return { ...state, menuAberto: !state.menuAberto };
    case "FINALIZAR_COMPRA":
      return { ...state, carrinho: [] };
    default:
      return state;
  }
};

// Função para obter o carrinho do localStorage
const getCarrinhoFromLocalStorage = () => {
  const carrinhoSalvo = localStorage.getItem("carrinho");
  return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []; // Retorna o carrinho salvo ou um array vazio
};

// Estado inicial do contexto
const initialState = {
  carrinho: getCarrinhoFromLocalStorage(), // Carrega o carrinho salvo no localStorage
  menuAberto: false,
};

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
