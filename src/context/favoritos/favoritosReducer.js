// Definindo o reducer para gerenciar as ações de favoritos
export const favoritosReducer = (state, action) => {
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

