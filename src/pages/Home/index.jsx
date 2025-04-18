// src/pages/Home.jsx
import React from "react";
import { useState } from "react";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import BannerCarrossel from "../../components/BannerCarrossel";
import Categorias from "../../components/Categoria";
import Produtos from "../../components/Produtos";

const Home = () => {
  const [carrinho, setCarrinho] = useState([]);

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
  return (
    <>
      <BarraDeNavegacao carrinho={carrinho} />
      <BannerCarrossel />
      <Categorias />
      <Produtos adicionarAoCarrinho={adicionarAoCarrinho} />
    </>
  );
};

export default Home;
