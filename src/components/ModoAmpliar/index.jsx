import { useCarrinho } from "../../hooks/useCarrinho";
import { FaTimes, FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoritos } from "../../hooks/useFavoritos";

import { motion, AnimatePresence } from "framer-motion";

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
  }, [fecharModal]);

  return (
    <AnimatePresence>
      {produtoAmpliado && (
        <ModalOverlay
          as={motion.div}
          onClick={fecharModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent
            as={motion.div}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ModalClose onClick={fecharModal}>
              <FaTimes />
            </ModalClose>
            <img src={produtoAmpliado.src} alt={produtoAmpliado.alt} />
            <TituloProduto>{produtoAmpliado.titulo}</TituloProduto>
            <DescricaoProduto>{produtoAmpliado.descricao}</DescricaoProduto>
            <PrecoProduto>R$ {produtoAmpliado.preco}</PrecoProduto>
            <ConteinerBotoes>
              <BotaoCarrinho
                onClick={() => adicionarAoCarrinho(produtoAmpliado)}
              >
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
      )}
    </AnimatePresence>
  );
};

export default ModoAmpliar;
