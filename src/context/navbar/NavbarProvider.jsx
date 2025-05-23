import { useEffect, useReducer, useRef } from "react";
import { navbarReducer } from "./navbarReducer";
import { initialNavbarState } from "./inicialState";
import { NavbarContext } from "./NavbarContext";

export const NavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navbarReducer, initialNavbarState);
  // Ref que será passada para a NavBar
  const navRef = useRef(null);

  // Atualiza a altura baseada no elemento DOM
  const atualizarAltura = () => {
    if (navRef.current) {
      const novaAltura = navRef.current.offsetHeight;
      dispatch({
        type: "SET_ALTURA",
        payload: novaAltura,
      });
    }
  };

  useEffect(() => {
    // Atualiza ao montar
    atualizarAltura(); // mede a altura assim que o provider monta

    // Atualiza ao redimensionar a tela
    window.addEventListener("resize", atualizarAltura);  // mede de novo se a tela for redimensionada
    return () => window.removeEventListener("resize", atualizarAltura); // limpa o listener ao desmontar
  }, []);

  return (
    <NavbarContext.Provider
      value={{
        altura: state.altura,
        navRef, // aqui passamos a ref
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
