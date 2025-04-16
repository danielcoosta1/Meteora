// src/pages/Home.jsx
import React from "react";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import BannerCarrossel from "../../components/BannerCarrossel";
import Categorias from "../../components/Categoria";

const Home = () => {
  return (
    <>
      <BarraDeNavegacao/>
      <BannerCarrossel/>
      <Categorias/>
    </>
  );
};

export default Home;
