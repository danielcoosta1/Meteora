import { useState, useEffect, useMemo } from "react";

import { CarrinhoContext } from "./CarrinhoContext";

// Provedor do contexto
export const CarrinhoProvider = ({ children }) => {
  //VARIÁVEIS

  // Estado para armazenar os produtos no carrinho
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []; // Inicializa o carrinho com os dados do localStorage, se existirem
  });

  // Estado para controlar se o menu lateral do carrinho está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // FUMÇÕES

  const abrirMenu = () => {
    setMenuAberto(true); // Abre o menu lateral do carrinho
  };
  const fecharMenu = () => {
    setMenuAberto(false); // Fecha o menu lateral do carrinho
  };

  // 💾 Salva o carrinho no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Converte o carrinho em string e salva no localStorage
  }, [carrinho]);

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

  // Calcula o total de preço e quantidade do carrinho
  // useMemo é usado para otimizar o desempenho, evitando cálculos desnecessários
  const { totalPreco, totalQuantidade } = useMemo(() => {
    const resultado = carrinho.reduce(
      (acc, item) => {
        acc.totalQuantidade += item.quantidade;
        acc.totalPreco += item.preco * item.quantidade;
        return acc;
      },
      { totalQuantidade: 0, totalPreco: 0 }
    );

    return resultado;
  }, [carrinho]);




  const finalizarCompra = () => {
    const carrinhoVazio = carrinho.length === 0; // Verifica se o carrinho está vazio
    // Se o carrinho estiver vazio, exibe um alerta e não permite finalizar a compra
    if (carrinhoVazio) {
      alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
      return;
    }
    // Aqui você pode adicionar a lógica para finalizar a compra, como enviar os dados para um servidor ou processar o pagamento.
    alert("Compra finalizada com sucesso! 🎉");
    setCarrinho([]); // limpa o carrinho
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerItem,
        limparCarrinho,
        totalPreco,
        totalQuantidade,
        menuAberto,
        setMenuAberto,
        abrirMenu,
        fecharMenu,
        finalizarCompra,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
