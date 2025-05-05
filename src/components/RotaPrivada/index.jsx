import {  useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toastErro } from "../../utils/toasts"; // ajuste o caminho conforme seu projeto
import { useAuth } from "../../hooks/useAuth";

const RotaPrivada = () => {
  const { usuario } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!usuario) {
      toastErro("Você precisa estar logado para acessar essa página!");
    }
  }, [usuario]);

  return usuario ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RotaPrivada;
