import { useReducer, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { initialState } from "./inicialState";
import { localStorageService } from "../../services/localStorageService";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorageService.salvar("usuario", state.usuario);
  }, [state.usuario]);

  const login = async (credenciais) => {
    try {
      const resposta = await fetch("http://localhost:3001/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenciais),
      });

      if (!resposta.ok) {
        throw new Error("Credenciais inválidas");
      }

      const usuario = await resposta.json();
      dispatch({ type: "LOGIN", payload: usuario });
    } catch (erro) {
      console.error("Erro no login:", erro.message);
      throw erro; // isso permite capturar no Login.jsx
    }
  };
  const logout = () => {
    localStorageService.remover("usuario"); // Remove o usuário do localStorage
    localStorageService.remover("carrinho"); // Remove o carrinho do localStorage também
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ usuario: state.usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
