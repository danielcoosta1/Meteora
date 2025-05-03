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

  const login = (dadosUsuario) => {
    dispatch({ type: "LOGIN", payload: dadosUsuario });
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
