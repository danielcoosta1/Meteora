// src/pages/Home.jsx
import React from "react";

import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import BannerCarrossel from "../../components/BannerCarrossel";

import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";
import ContainerHome from "../../components/ContainerHome";
import Facilidades from "../../components/Facilidades";
import Novidades from "../../components/Novidades";
import Footer from "../../components/Footer";


import { useCarrinho } from "../../hooks/useCarrinho";
import ProdutosBombando from "../../components/ProdutosBombando";

const Home = () => {
  const { menuAberto } = useCarrinho();

  return (
    <>
      <BarraDeNavegacao />
      <BannerCarrossel />
      <ContainerHome>
        <ProdutosBombando />
        {menuAberto && <MenuLateralCarrinho />}
      </ContainerHome>
      <Facilidades />
      <Novidades />
      <Footer />
    </>
  );
};

export default Home;
