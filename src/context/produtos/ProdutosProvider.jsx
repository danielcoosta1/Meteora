import { useState, useMemo } from "react";
import { ProdutosContext } from "./ProdutosContext";

import todosProdutos from "../../mocks/todosProdutos.json";

export const ProdutoProvider = ({ children }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");
  const [produtoAmpliado, setProdutoAmpliado] = useState(null);

  const abrirModal = (produto) => setProdutoAmpliado(produto);
  const fecharModal = () => setProdutoAmpliado(null);

  // Filtra os produtos com base na categoria selecionada
  // e no termo de busca
  const produtosFiltradosPorCategoria = useMemo(() => { //useMemo é usado para memorizar o resultado da função, evitando cálculos desnecessários
    return categoriaSelecionada
      ? todosProdutos.filter(
          (produto) =>
            produto.categoria.toLowerCase() ===
            categoriaSelecionada.toLowerCase()
        )
      : todosProdutos;
  }, [categoriaSelecionada]);

  const produtosFiltradosPorBusca = useMemo(() => {
    return termoBusca
      ? produtosFiltradosPorCategoria.filter((produto) =>
          produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
        )
      : produtosFiltradosPorCategoria;
  }, [termoBusca, produtosFiltradosPorCategoria]);

  const produtosParaExibir = useMemo(() => {
    return categoriaSelecionada || termoBusca
      ? produtosFiltradosPorBusca
      : todosProdutos;
  }, [categoriaSelecionada, termoBusca, produtosFiltradosPorBusca]);

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
        produtosParaExibir,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};
