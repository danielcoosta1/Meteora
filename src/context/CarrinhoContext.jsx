// src/context/CarrinhoContext.jsx
import { createContext, useState } from "react";

// Cria o contexto
const CarrinhoContext = createContext();

// Provedor do contexto
export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};


