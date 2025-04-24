// src/pages/Home.jsx
import React from "react";

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
import { useCarrinho } from "../../hooks/useCarrinho";

const Home = () => {
  const { menuAberto } = useCarrinho();

  return (
    <>
      <BarraDeNavegacao/>
      <BannerCarrossel />
      <ContainerHome>
        <Categorias />
        <Produtos todosProdutos={todosProdutos} />
        {menuAberto && (
          <MenuLateralCarrinho />
        )}
      </ContainerHome>
      <Facilidades />
      <Novidades />
      <Footer />
    </>
  );
};

export default Home;
