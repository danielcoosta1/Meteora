import { useState } from "react";
import { ProdutosContext } from "./ProdutosContext";

import todosProdutos from "../../mocks/todosProdutos.json";

export const ProdutoProvider = ({ children }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");
  const [produtoAmpliado, setProdutoAmpliado] = useState(null);

  const abrirModal = (produto) => setProdutoAmpliado(produto);
  const fecharModal = () => setProdutoAmpliado(null);

  // Filtra os produtos com base na categoria selecionada e no termo de busca
  const produtosFiltradosPorCategoria = categoriaSelecionada
    ? todosProdutos.filter(
        (produto) =>
          //Se a categoria do produto for igual a categoria selecionada, retorna o produto
          produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
      )
    : todosProdutos; // Se não houver categoria selecionada, retorna todos os produtos

  // Filtra os produtos com base no termo de busca
  const produtosFiltradosPorBusca = termoBusca
    ? produtosFiltradosPorCategoria.filter((produto) =>
        produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      )
    : produtosFiltradosPorCategoria;

  // Se houver categoria selecionada ou termo de busca, exibe os produtos filtrados, caso contrário, exibe os produtos bombando
  const produtosParaExibir =
    categoriaSelecionada || termoBusca
      ? produtosFiltradosPorBusca
      : todosProdutos;

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
