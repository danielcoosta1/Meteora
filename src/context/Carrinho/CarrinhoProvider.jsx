import { useState } from "react";

import { CarrinhoContext } from "./CarrinhoContext";

// Provedor do contexto
export const CarrinhoProvider = ({ children }) => {
  // Estado do carrinho
  const [carrinho, setCarrinho] = useState([]);
  // Estado para armazenar a categoria selecionada
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  // Estado para armazenar o termo de busca
  const [termoBusca, setTermoBusca] = useState("");

  // Função para adicionar um produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      // Checa se o produto já está no carrinho
      const produtoExistente = prevCarrinho.find(
        (item) => item.id === produto.id
      );
      if (produtoExistente) {
        // Se já existir, incrementa a quantidade
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        // Se não existir, adiciona com quantidade 1
        return [...prevCarrinho, { ...produto, quantidade: 1 }];
      }
    });
  };

  // Função para limpar o carrinho
  const limparCarrinho = () => {
    if (carrinho.length === 0) {
      alert("O carrinho já está vazio!");
      return;
    }
    // Pergunta ao usuário se ele realmente deseja limpar o carrinho
    const confirmar = window.confirm("Deseja limpar o carrinho?");
    if (confirmar) {
      setCarrinho([]); // Limpa o carrinho
    }
  };

  //Funções para aumentar, diminuir e remover itens do carrinho

  // Aumenta a quantidade de um item no carrinho
  const aumentarQuantidade = (id) => {
    const atualizado = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCarrinho(atualizado);
  };

  // Diminui a quantidade de um item no carrinho
  const diminuirQuantidade = (id) => {
    const item = carrinho.find((item) => item.id === id);

    // Se a quantidade for 1, pergunta se o usuário deseja remover o item
    if (item.quantidade === 1) {
      const confirmar = window.confirm("Deseja remover este item do carrinho?");
      if (!confirmar) return;
    }

    const atualizado = carrinho
      .map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      )
      .filter((item) => item.quantidade > 0); // Remove o item se a quantidade for 0

    setCarrinho(atualizado);
  };

  // Remove um item do carrinho
  const removerItem = (id) => {
    const atualizado = carrinho.filter((item) => item.id !== id);
    setCarrinho(atualizado);
  };
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        categoriaSelecionada,
        setCategoriaSelecionada,
        termoBusca,
        setTermoBusca,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerItem,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
