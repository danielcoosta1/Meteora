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
    const produtoExistente = favoritos.find(
      (favorito) => favorito.id === produto.id
    );

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

  // Verifica se há itens favoritados
  const haItensFavoritados = favoritos.length > 0;

  // Verifica se há itens favoritados
  const limparFavoritos = () => {
    // Pergunta ao usuário se ele realmente deseja limpar os favoritos
    window.confirm("Você tem certeza que deseja limpar todos os favoritos?");
    // Se o usuário confirmar, limpa os favoritos
    if (window.confirm) {
      // Limpa os favoritos
      setFavoritos([]);
    }
    return; // Se o usuário cancelar, não faz nada
    // Limpa os favoritos
  };

  return (
    <FavoritosContext.Provider
      value={{
        handleFavoritarProduto,
        isFavoritado,
        favoritos,
        setFavoritos,
        limparFavoritos,
        haItensFavoritados,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
