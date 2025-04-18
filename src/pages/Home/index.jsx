// src/pages/Home.jsx
import React from "react";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import BannerCarrossel from "../../components/BannerCarrossel";
import Categorias from "../../components/Categoria";
import Produtos from "../../components/Produtos";

const Home = () => {
  return (
    <>
      <BarraDeNavegacao/>
      <BannerCarrossel/>
      <Categorias/>
      <Produtos/>
    </>
  );
};

export default Home;
