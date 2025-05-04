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
        throw new Error("Erro ao fazer login");
      }
  
      const usuario = await resposta.json();
      dispatch({ type: "LOGIN", payload: usuario });
    } catch (erro) {
      console.error("Erro no login:", erro.message);
      // Aqui você pode mostrar feedback ao usuário, etc.
    }
  };
  
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ usuario: state.usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
