import { FavoritosContext } from "./FavoritosContext";

import { useState, useEffect } from "react";

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritoSalvo = localStorage.getItem("favorito");
    return favoritoSalvo ? JSON.parse(favoritoSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorito", JSON.stringify(favoritos)); // Converte o carrinho em string e salva no localStorage
  }, [favoritos]);

  // Função para adicionar ou remover produtos dos favoritos
  const handleFavoritarProduto = (produtoId) => {
    if (favoritos.includes(produtoId)) {
      setFavoritos(favoritos.filter((id) => id !== produtoId));
    } else {
      setFavoritos([...favoritos, produtoId]);
    }
  };

  // Verifica se o produto está favoritado
  const isFavoritado = (produtoId) => {
    return favoritos.includes(produtoId);
  };

  return (
    <FavoritosContext.Provider value={{ handleFavoritarProduto, isFavoritado }}>
      {children}
    </FavoritosContext.Provider>
  );
};
