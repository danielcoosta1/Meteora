export const produtosReducer = (state, action) => {
  switch (action.type) {
    case "SELECIONAR_CATEGORIA":
      return { ...state, categoriaSelecionada: action.payload };
    case "DEFINIR_TERMO_BUSCA":
      return { ...state, termoBusca: action.payload };
    case "DEFINIR_FILTRO_PRECO":
      return { ...state, filtroPreco: action.payload };
    case "ABRIR_MODAL":
      return { ...state, produtoAmpliado: action.payload };
    case "FECHAR_MODAL":
      return { ...state, produtoAmpliado: null };
    case "LIMPAR_FILTROS":
      return {
        ...state,
        categoriaSelecionada: null,
        termoBusca: "",
        filtroPreco: null,
      };
    default:
      return state;
  }
};

