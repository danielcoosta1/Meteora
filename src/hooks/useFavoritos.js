import { useContext } from "react";

import { FavoritosContext } from "../context/favoritos/FavoritosContext";

export const useFavoritos = () => useContext(FavoritosContext);
