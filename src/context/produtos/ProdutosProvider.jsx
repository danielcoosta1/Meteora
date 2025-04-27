import { useReducer, useMemo } from "react";
import { ProdutosContext } from "./ProdutosContext";

import todosProdutos from "../../mocks/todosProdutos.json";

const produtosReducer = (state, action) => {
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

const initialState = {
  categoriaSelecionada: null,
  termoBusca: "",
  filtroPreco: null,
  produtoAmpliado: null,
};

export const ProdutoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(produtosReducer, initialState);

  const abrirModal = (produto) =>
    dispatch({ type: "ABRIR_MODAL", payload: produto });
  const fecharModal = () => dispatch({ type: "FECHAR_MODAL" });

  const produtosParaExibir = useMemo(() => {
    let produtosFiltrados = todosProdutos;

    if (state.categoriaSelecionada) {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) =>
          produto.categoria.toLowerCase() ===
          state.categoriaSelecionada.toLowerCase()
      );
    }

    if (state.termoBusca.trim()) {
      produtosFiltrados = produtosFiltrados.filter((produto) =>
        produto.titulo.toLowerCase().includes(state.termoBusca.toLowerCase())
      );
    }

    if (state.filtroPreco) {
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        switch (state.filtroPreco) {
          case "ate100":
            return produto.preco <= 100;
          case "100a200":
            return produto.preco > 100 && produto.preco <= 200;
          case "acima200":
            return produto.preco > 200;
          default:
            return true;
        }
      });
    }

    return produtosFiltrados;
  }, [state.categoriaSelecionada, state.termoBusca, state.filtroPreco]);

  const haProdutosFiltrados =
    state.categoriaSelecionada !== null ||
    state.termoBusca !== "" ||
    state.filtroPreco !== null;

  const limparFiltro = () => dispatch({ type: "LIMPAR_FILTROS" });

  return (
    <ProdutosContext.Provider
      value={{
        categoriaSelecionada: state.categoriaSelecionada,
        termoBusca: state.termoBusca,
        filtroPreco: state.filtroPreco,
        produtoAmpliado: state.produtoAmpliado,
        abrirModal,
        fecharModal,
        produtosParaExibir,
        haProdutosFiltrados,
        limparFiltro,
        // Funções de dispatch para atualizar o estado
        setCategoriaSelecionada: (categoria) =>
          dispatch({ type: "SELECIONAR_CATEGORIA", payload: categoria }),
        setTermoBusca: (termo) =>
          dispatch({ type: "DEFINIR_TERMO_BUSCA", payload: termo }),
        setFiltroPreco: (filtro) =>
          dispatch({ type: "DEFINIR_FILTRO_PRECO", payload: filtro }),
        setProdutoAmpliado: (produto) =>
          dispatch({ type: "ABRIR_MODAL", payload: produto }),
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};
