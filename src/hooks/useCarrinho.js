// src/context/useCarrinho.js
import { useContext } from "react";

import { CarrinhoContext } from "../context/carrinho/CarrinhoContext";

// Hook customizado para facilitar o uso
export const useCarrinho = () => useContext(CarrinhoContext);
