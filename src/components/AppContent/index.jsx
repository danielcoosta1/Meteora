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

const AppContent = () => {
  const { menuAberto } = useCarrinho();

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
      {menuAberto && <MenuLateralCarrinho />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/novidades" element={<Novidades />} />
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
