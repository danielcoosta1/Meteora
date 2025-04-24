import { useCarrinho } from "../../hooks/useCarrinho";
import { FaTimes, FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoritos } from "../../hooks/useFavoritos";
import {
  BotaoCarrinho,
  ConteinerBotoes,
  DescricaoProduto,
  IconesWrapper,
  ModalClose,
  ModalContent,
  ModalOverlay,
  PrecoProduto,
  TituloProduto,
} from "./styles";

import { useEffect } from "react";

const ModoAmpliar = () => {
  const { produtoAmpliado, fecharModal, adicionarAoCarrinho } = useCarrinho();

  const { handleFavoritarProduto, isFavoritado } = useFavoritos();

  const favoritado = isFavoritado(produtoAmpliado);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        fecharModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ModalOverlay onClick={fecharModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalClose onClick={fecharModal}>
          <FaTimes />
        </ModalClose>
        <img src={produtoAmpliado.src} alt={produtoAmpliado.alt} />
        <TituloProduto>{produtoAmpliado.titulo}</TituloProduto>
        <DescricaoProduto>{produtoAmpliado.descricao}</DescricaoProduto>
        <PrecoProduto>R$ {produtoAmpliado.preco}</PrecoProduto>
        <ConteinerBotoes>
          <BotaoCarrinho onClick={() => adicionarAoCarrinho(produtoAmpliado)}>
            Adicionar ao carrinho
          </BotaoCarrinho>
          <div>
            <IconesWrapper
              onClick={() => handleFavoritarProduto(produtoAmpliado)}
              $favoritado={favoritado}
            >
              {favoritado ? <FaHeart /> : <FaRegHeart />}
            </IconesWrapper>
          </div>
        </ConteinerBotoes>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModoAmpliar;
