// Definindo o reducer para gerenciar as ações do carrinho
export const carrinhoReducer = (state, action) => {
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
    case "CARREGAR_CARRINHO":
      return {
        ...state,
        carrinho: action.payload,
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
