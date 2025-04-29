import { useCarrinho } from "../../hooks/useCarrinho";
import { useFavoritos } from "../../hooks/useFavoritos";
import { useProdutos } from "../../hooks/useProdutos";
import { toastInfo, toastRemocaoFavorito, toastSucesso } from "../../utils/toast";

import {
  CardProduto,
  ImagemProduto,
  TituloProduto,
  DescricaoProduto,
  PrecoProduto,
  BotaoCarrinho,
  ConteinerBotoes,
  ConteinerIcones,
  IconesWrapper,
} from "./styles";

import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";

const ProdutoCard = ({ produto }) => {
  const { adicionarAoCarrinho } = useCarrinho();
  const { handleFavoritarProduto, isFavoritado } = useFavoritos();
  const { abrirModal } = useProdutos();

  const handleAdicionarCarrinho = () => {
    adicionarAoCarrinho(produto);
    toastSucesso("Produto adicionado ao carrinho!");
  };

  const handleFavorito = () => {
    const resultado = handleFavoritarProduto(produto);

    if (resultado === "adicionado") {
      toastInfo("Produto adicionado aos favoritos.");
    } else if (resultado === "removido") {
      toastRemocaoFavorito("Produto removido dos favoritos.");
    }
  };

  return (
    <CardProduto>
      <ImagemProduto src={produto.src} alt={produto.alt} />
      <TituloProduto>{produto.titulo}</TituloProduto>
      <DescricaoProduto>{produto.descricao}</DescricaoProduto>
      <PrecoProduto>R$ {produto.preco}</PrecoProduto>

      <ConteinerBotoes>
        <BotaoCarrinho onClick={handleAdicionarCarrinho}>
          Adicionar ao carrinho
        </BotaoCarrinho>

        <ConteinerIcones>
          <IconesWrapper
            onClick={handleFavorito}
            $favoritado={isFavoritado(produto)}
          >
            {isFavoritado(produto) ? <FaHeart /> : <FaRegHeart />}
          </IconesWrapper>

          <IconesWrapper onClick={() => abrirModal(produto)}>
            <FaExpand />
          </IconesWrapper>
        </ConteinerIcones>
      </ConteinerBotoes>
    </CardProduto>
  );
};

export default ProdutoCard;
