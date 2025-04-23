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
  const handleFavoritarProduto = (produto) => {
    const produtoExistente = favoritos.find((favorito) => favorito.id === produto.id);

    if (produtoExistente) {
      // Produto já favoritado, removendo
      setFavoritos(favoritos.filter((favorito) => favorito.id !== produto.id));
    } else {
      // Produto não favoritado, adicionando
      setFavoritos([...favoritos, produto]);
    }
  };

  // Verifica se o produto está favoritado
const isFavoritado = (produto) => {
    return favoritos.some((favorito) => favorito.id === produto.id);
  };

  return (
    <FavoritosContext.Provider
      value={{ handleFavoritarProduto, isFavoritado, favoritos, setFavoritos }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
