// src/context/produtos/initialState.js

const getFiltrosFromLocalStorage = () => {
  const filtrosSalvos = localStorage.getItem("filtros");
  return filtrosSalvos
    ? JSON.parse(filtrosSalvos)
    : { categoriaSelecionada: null, termoBusca: "", filtroPreco: null };
};

export const initialState = {
  ...getFiltrosFromLocalStorage(),
  produtoAmpliado: null, // Modal sempre começa fechado, não precisa salvar no localStorage
};
