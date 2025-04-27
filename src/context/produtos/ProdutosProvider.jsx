import { useState, useMemo } from "react";
import { ProdutosContext } from "./ProdutosContext";

import todosProdutos from "../../mocks/todosProdutos.json";

export const ProdutoProvider = ({ children }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");
  const [filtroPreco, setFiltroPreco] = useState(null);
  const [produtoAmpliado, setProdutoAmpliado] = useState(null);

  const abrirModal = (produto) => setProdutoAmpliado(produto);
  const fecharModal = () => setProdutoAmpliado(null);

  const produtosParaExibir = useMemo(() => {
    let produtosFiltrados = todosProdutos;

    if (categoriaSelecionada) {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) =>
          produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
      );
    }

    if (termoBusca.trim()) {
      produtosFiltrados = produtosFiltrados.filter((produto) =>
        produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      );
    }

    if (filtroPreco) {
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        switch (filtroPreco) {
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
  }, [categoriaSelecionada, termoBusca, filtroPreco]);

  const haProdutosFiltrados =
    categoriaSelecionada !== null || termoBusca !== "" || filtroPreco !== null;

  const limparFiltro = () => {
    setCategoriaSelecionada(null);
    setTermoBusca("");
    setFiltroPreco(null);
  };

  return (
    <ProdutosContext.Provider
      value={{
        categoriaSelecionada,
        setCategoriaSelecionada,
        termoBusca,
        setTermoBusca,
        produtoAmpliado,
        setProdutoAmpliado,
        abrirModal,
        fecharModal,
        filtroPreco,
        setFiltroPreco,
        produtosParaExibir,
        haProdutosFiltrados,
        limparFiltro,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};
