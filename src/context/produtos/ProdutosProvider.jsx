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

  // // Filtra os produtos com base na categoria selecionada
  // // e no termo de busca
  // const produtosFiltradosPorCategoria = useMemo(() => {
  //   //useMemo é usado para memorizar o resultado da função, evitando cálculos desnecessários
  //   return categoriaSelecionada
  //     ? todosProdutos.filter(
  //         (produto) =>
  //           produto.categoria.toLowerCase() ===
  //           categoriaSelecionada.toLowerCase()
  //       )
  //     : todosProdutos;
  // }, [categoriaSelecionada]);

  // const produtosFiltradosPorBusca = useMemo(() => {
  //   return termoBusca
  //     ? produtosFiltradosPorCategoria.filter((produto) =>
  //         produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
  //       )
  //     : produtosFiltradosPorCategoria;
  // }, [termoBusca, produtosFiltradosPorCategoria]);

  // const produtosFiltradosPorPreco = useMemo(() => {
  //   if (!filtroPreco) return produtosFiltradosPorBusca;

  //   return produtosFiltradosPorBusca.filter((produto) => {
  //     switch (filtroPreco) {
  //       case "ate100":
  //         return produto.preco <= 100;
  //       case "100a200":
  //         return produto.preco > 100 && produto.preco <= 200;
  //       case "acima200":
  //         return produto.preco > 200;
  //       default:
  //         return true;
  //     }
  //   });
  // }, [filtroPreco, produtosFiltradosPorBusca]);

  // const produtosParaExibir = useMemo(() => {
  //   return produtosFiltradosPorPreco;
  // }, [produtosFiltradosPorPreco]);

  const produtosParaExibir = useMemo(() => {
    let produtosFiltrados = todosProdutos;

    if (categoriaSelecionada) {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) =>
          produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
      );
    }

    if (termoBusca) {
      produtosFiltrados = produtosFiltrados.filter((produto) =>
        produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      );
    }

    if (filtroPreco) {
      const filtrosValidos = ["ate100", "100a200", "acima200"];
      if (filtrosValidos.includes(filtroPreco)) {
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
    }

    return produtosFiltrados;
  }, [categoriaSelecionada, termoBusca, filtroPreco]);

  const haProdutosFiltrados = categoriaSelecionada !== null || termoBusca !== "" || filtroPreco !== null;


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
        limparFiltro
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};
