import { useCarrinho } from "../../hooks/useCarrinho";
import { FaTimes, FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoritos } from "../../hooks/useFavoritos";
import { BotaoCarrinho, ConteinerBotoes, DescricaoProduto, IconesWrapper, ModalClose, ModalContent, ModalOverlay, PrecoProduto, TituloProduto } from "./styles";

const ModoAmpliar = () => {
  const { produtoAmpliado, fecharModal, adicionarAoCarrinho } = useCarrinho();

  const { handleFavoritarProduto, isFavoritado } = useFavoritos();

  return (
    <ModalOverlay>
      <ModalContent>
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
              $favoritado={isFavoritado(produtoAmpliado)}
            >
              {isFavoritado(produtoAmpliado) ? <FaHeart /> : <FaRegHeart />}
            </IconesWrapper>
          </div>
        </ConteinerBotoes>
      </ModalContent>
    </ModalOverlay>
  );
};


export default ModoAmpliar;
