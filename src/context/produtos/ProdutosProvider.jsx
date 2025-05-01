import { useReducer, useMemo, useEffect, useRef } from "react";
import axios from "axios";
import { ProdutosContext } from "./ProdutosContext";

import { produtosReducer } from "./produtosReducer";

import { initialState } from "./initialState";
import { localStorageService } from "../../services/localStorageService";
import { isEqual } from "lodash";

export const ProdutoProvider = ({ children }) => {
  // Cria o estado global para os produtos
  const [state, dispatch] = useReducer(produtosReducer, initialState);

  const ultimaVersaoSalva = useRef();

  // Carrega os filtros do localStorage quando o componente é montado
  useEffect(() => {
    const filtrosParaSalvar = {
      categoriaSelecionada: state.categoriaSelecionada,
      termoBusca: state.termoBusca,
      filtroPreco: state.filtroPreco,
      generoSelecionado: state.generoSelecionado,
    };

    if (!isEqual(ultimaVersaoSalva.current, filtrosParaSalvar)) {
      localStorageService.salvar("filtros", filtrosParaSalvar);
      ultimaVersaoSalva.current = filtrosParaSalvar; // Atualiza a última versão salva
    }
  }, [
    state.categoriaSelecionada,
    state.termoBusca,
    state.filtroPreco,
    state.generoSelecionado,
  ]);

  // UseEffect para carregar os produtos do backend
  useEffect(() => {
    // Função para buscar os produtos
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/produtos"); // URL do seu backend
        const produtos = response.data; // Os dados retornados da API
        dispatch({ type: "CARREGAR_PRODUTOS", payload: produtos }); // Dispara a ação de carregar os produtos
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      }
    };

    fetchProdutos(); // Chama a função para buscar os produtos
  }, []); // O array vazio garante que a requisição seja feita uma vez, na montagem do componente

  // Funções para abrir e fechar o modal
  const abrirModal = (produto) =>
    dispatch({ type: "ABRIR_MODAL", payload: produto });
  const fecharModal = () => dispatch({ type: "FECHAR_MODAL" });

  // Filtra os produtos com base nos filtros aplicados
  // Utiliza useMemo para otimizar o desempenho, evitando re-renderizações desnecessárias
  // quando os filtros não mudam
  // e apenas recalcula quando os filtros são alterados

  const produtosParaExibir = useMemo(() => {
    let produtosFiltrados = state.produtos; // Começa com todos os produtos

    // Filtrando pela categoria
    if (state.categoriaSelecionada) {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) =>
          produto.categoria.toLowerCase() ===
          state.categoriaSelecionada.toLowerCase()
      );
    }

    // Filtrando pelo termo de busca
    if (state.termoBusca.trim()) {
      produtosFiltrados = produtosFiltrados.filter((produto) =>
        produto.titulo.toLowerCase().includes(state.termoBusca.toLowerCase())
      );
    }

    // Filtrando pelo preço
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

    // Filtrando pelo gênero
    if (state.generoSelecionado) {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) =>
          produto.genero.toLowerCase() === state.generoSelecionado.toLowerCase()
      );
    }

    return produtosFiltrados; // Retorna os produtos após aplicar os filtros
  }, [
    state.produtos,
    state.categoriaSelecionada,
    state.termoBusca,
    state.filtroPreco,
    state.generoSelecionado,
  ]);

  // Verifica se há produtos filtrados
  const haProdutosFiltrados =
    state.categoriaSelecionada !== null ||
    state.termoBusca !== "" ||
    state.filtroPreco !== null ||
    state.generoSelecionado !== null;

  // Função para limpar todos os filtros
  const limparFiltro = () => dispatch({ type: "LIMPAR_FILTROS" });

  // Função para gerar os filtros aplicados - span com informações do filtro utilizado

  const gerarFiltrosAplicados = () => {
    const filtros = [];

    if (state.categoriaSelecionada) {
      filtros.push({
        tipo: "categoria",
        componente: <span>Categoria: {state.categoriaSelecionada}</span>,
      });
    }

    if (state.termoBusca.trim()) {
      filtros.push({
        tipo: "busca",
        componente: <span>Buscando por: {state.termoBusca}</span>,
      });
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
      filtros.push({
        tipo: "preco",
        componente: <span>Preço: {precoTitulo}</span>,
      });
    }

    if (state.generoSelecionado) {
      filtros.push({
        tipo: "genero",
        componente: <span>Gênero: {state.generoSelecionado}</span>,
      });
    }

    return filtros.length > 0
      ? filtros
      : [{ tipo: "nenhum", componente: <span>Nenhum filtro aplicado</span> }];
  };

  // Função para limpar o filtro de categoria
  const limparFiltroCategoria = () =>
    dispatch({ type: "SELECIONAR_CATEGORIA", payload: null });
  // Função para limpar o filtro de busca
  const limparFiltroBusca = () =>
    dispatch({ type: "DEFINIR_TERMO_BUSCA", payload: "" });
  // Função para limpar o filtro de preço
  const limparFiltroPreco = () =>
    dispatch({ type: "DEFINIR_FILTRO_PRECO", payload: null });
  // Função para limpar o filtro de gênero
  const limparFiltroGenero = () =>
    dispatch({ type: "DEFINIR_GENERO", payload: null });

  return (
    <ProdutosContext.Provider
      value={{
        categoriaSelecionada: state.categoriaSelecionada,
        termoBusca: state.termoBusca,
        filtroPreco: state.filtroPreco,
        generoSelecionado: state.generoSelecionado,
        produtoAmpliado: state.produtoAmpliado,
        abrirModal,
        fecharModal,
        produtosParaExibir,
        haProdutosFiltrados,
        limparFiltro,
        limparFiltroCategoria,
        limparFiltroBusca,
        limparFiltroPreco,
        limparFiltroGenero,
        gerarFiltrosAplicados,

        // Funções de dispatch para atualizar o estado
        setCategoriaSelecionada: (categoria) =>
          dispatch({ type: "SELECIONAR_CATEGORIA", payload: categoria }),
        setTermoBusca: (termo) =>
          dispatch({ type: "DEFINIR_TERMO_BUSCA", payload: termo }),
        setFiltroPreco: (filtro) =>
          dispatch({ type: "DEFINIR_FILTRO_PRECO", payload: filtro }),
        setGeneroSelecionado: (genero) =>
          dispatch({ type: "DEFINIR_GENERO", payload: genero }),
        setProdutoAmpliado: (produto) =>
          dispatch({ type: "ABRIR_MODAL", payload: produto }),
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};
