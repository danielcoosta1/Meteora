import { useContext } from "react";
import { NavbarContext } from "../context/navbar/NavbarContext";

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbar deve ser usado dentro de um NavbarProvider");
  }

  return context;
};
