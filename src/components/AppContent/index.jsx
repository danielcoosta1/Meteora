import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MenuLateralCarrinho from "../MenuLateralCarrinho";

import Home from "../../pages/Home";
import Produtos from "../../pages/Produtos";
import Login from "../../pages/Login";
import Checkout from "../../pages/Checkout";
import Error from "../../pages/Error404";
import Novidades from "../../pages/Novidades";
import Promocoes from "../../pages/Promocoes";
import Favoritos from "../../pages/Favoritos";
import { useCarrinho } from "../../hooks/useCarrinho";
import Cadastro from "../../pages/Cadastro";
import RotaPrivada from "../RotaPrivada";
import BarraDeNavegacao from "../BarraDeNavegacao";
import { useState } from "react";
const AppContent = () => {
  const { menuAberto } = useCarrinho();
  const [alturaNav, setAlturaNav] = useState(0);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <BarraDeNavegacao setAlturaNav={setAlturaNav} alturaNav={alturaNav} />
      {menuAberto && <MenuLateralCarrinho />}

      <Routes>
        <Route path="/login" element={<Login alturaNav={alturaNav} />} />
        <Route path="/cadastro" element={<Cadastro alturaNav={alturaNav} />} />
        <Route path="/produtos" element={<Produtos alturaNav={alturaNav} />} />
        <Route
          path="/promocoes"
          element={<Promocoes alturaNav={alturaNav} />}
        />
        <Route
          path="/novidades"
          element={<Novidades alturaNav={alturaNav} />}
        />
        <Route path="/" element={<Home />} />

        {/* Rotas protegidas */}
        <Route element={<RotaPrivada />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AppContent;
