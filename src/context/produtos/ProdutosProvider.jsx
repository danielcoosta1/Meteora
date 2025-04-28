import { useReducer, useMemo } from "react";
import { ProdutosContext } from "./ProdutosContext";

import { IconeRemover } from "../../pages/Produtos/styles";

import todosProdutos from "../../mocks/todosProdutos.json";

import { produtosReducer } from "./produtosReducer";

import { initialState } from "./initialState";

export const ProdutoProvider = ({ children }) => {
  // Cria o estado global para os produtos
  const [state, dispatch] = useReducer(produtosReducer, initialState);

  // Funções para abrir e fechar o modal
  const abrirModal = (produto) =>
    dispatch({ type: "ABRIR_MODAL", payload: produto });
  const fecharModal = () => dispatch({ type: "FECHAR_MODAL" });

  // Filtra os produtos com base nos filtros aplicados
  // Utiliza useMemo para otimizar o desempenho, evitando re-renderizações desnecessárias
  // quando os filtros não mudam
  // e apenas recalcula quando os filtros são alterados

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

  // Verifica se há produtos filtrados
  const haProdutosFiltrados =
    state.categoriaSelecionada !== null ||
    state.termoBusca !== "" ||
    state.filtroPreco !== null;

  // Função para limpar todos os filtros
  const limparFiltro = () => dispatch({ type: "LIMPAR_FILTROS" });

  // Função para gerar spans dinâmicos com base nos filtros
  const gerarFiltrosAplicados = () => {
    const filtros = [];

    if (state.categoriaSelecionada) {
      filtros.push(
        <span key="categoria">
          Categoria: {state.categoriaSelecionada}
          <IconeRemover onClick={limparFiltroCategoria} />
        </span>
      );
    }

    if (state.termoBusca.trim()) {
      filtros.push(
        <span key="busca">
          Buscando por: {state.termoBusca}
          <IconeRemover onClick={limparFiltroBusca} />
        </span>
      );
    }

    if (state.filtroPreco) {
      let precoTitulo;
      switch (state.filtroPreco) {
        case "ate100":
          precoTitulo = "Até R$100";
          break;
        case "100a200":
          precoTitulo = "R$100 a R$200";
          break;
        case "acima200":
          precoTitulo = "Acima de R$200";
          break;
        default:
          precoTitulo = "";
          break;
      }
      filtros.push(
        <span key="preco">
          Preço: {precoTitulo}
          <IconeRemover onClick={limparFiltroPreco} />
        </span>
      );
    }

    // Caso não tenha filtros, mostrar a mensagem de "Nenhum filtro aplicado"
    if (filtros.length === 0) {
      filtros.push(<span key="nenhum">Nenhum filtro aplicado</span>);
    }

    return filtros;
  };

  // Funções para limpar filtros específicos

  // Função para limpar o filtro de categoria
  const limparFiltroCategoria = () =>
    dispatch({ type: "SELECIONAR_CATEGORIA", payload: null });
  // Função para limpar o filtro de busca
  const limparFiltroBusca = () =>
    dispatch({ type: "DEFINIR_TERMO_BUSCA", payload: "" });
  // Função para limpar o filtro de preço
  const limparFiltroPreco = () =>
    dispatch({ type: "DEFINIR_FILTRO_PRECO", payload: null });

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
        limparFiltroCategoria,
        limparFiltroBusca,
        limparFiltroPreco,
        gerarFiltrosAplicados,

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
