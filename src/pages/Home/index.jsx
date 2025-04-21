// src/pages/Home.jsx
import React from "react";
import { useState } from "react";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import BannerCarrossel from "../../components/BannerCarrossel";
import Categorias from "../../components/Categoria";
import Produtos from "../../components/Produtos";
import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";
import ContainerHome from "../../components/ContainerHome";
import Facilidades from "../../components/Facilidades";
import Novidades from "../../components/Novidades";
import Footer from "../../components/Footer";

import todosProdutos from "../../mocks/todosProdutos.json";

const Home = ({ carrinho, setCarrinho }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

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
      <BarraDeNavegacao
        carrinho={carrinho}
        abrirMenu={() => setMenuAberto(true)}
      />
      <BannerCarrossel />
      <ContainerHome>
        <Categorias setCategoriaSelecionada={setCategoriaSelecionada} />
        <Produtos
          adicionarAoCarrinho={adicionarAoCarrinho}
          todosProdutos={todosProdutos}
          categoriaSelecionada={categoriaSelecionada}
          setCategoriaSelecionada={setCategoriaSelecionada}
        />
        {menuAberto && (
          <MenuLateralCarrinho
            carrinho={carrinho}
            fecharMenu={() => setMenuAberto(false)}
            setCarrinho={setCarrinho}
          />
        )}
      </ContainerHome>
      <Facilidades />
      <Novidades />
      <Footer />
    </>
  );
};

export default Home;
