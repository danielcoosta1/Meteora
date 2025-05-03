// src/pages/Home.jsx
import React from "react";

import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import BannerCarrossel from "../../components/BannerCarrossel";


import ContainerHome from "../../components/ContainerHome";
import Facilidades from "../../components/Facilidades";
import Novidades from "../../components/Novidades";
import Footer from "../../components/Footer";



import ProdutosBombando from "../../components/ProdutosBombando";

const Home = () => {


  return (
    <>
      <BarraDeNavegacao />
      <BannerCarrossel />
      <ContainerHome>
        <ProdutosBombando />
  
      </ContainerHome>
      <Facilidades />
      <Novidades />
      <Footer />
    </>
  );
};

export default Home;
