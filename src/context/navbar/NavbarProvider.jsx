import { useReducer } from "react";
import { navbarReducer } from "./navbarReducer";
import { initialNavbarState } from "./inicialState";
import { NavbarContext } from "./NavbarContext";

export const NavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navbarReducer, initialNavbarState);

  const setAltura = (novaAltura) => {
    dispatch({ type: "SET_ALTURA", payload: novaAltura });
  };

  return (
    <NavbarContext.Provider value={{ altura: state.altura, setAltura }}>
      {children}
    </NavbarContext.Provider>
  );
};
