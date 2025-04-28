import { useState } from "react";
import { useCarrinho } from "../../hooks/useCarrinho";
import { useFavoritos } from "../../hooks/useFavoritos";
import { useProdutos } from "../../hooks/useProdutos";

import { 
  CardProduto, 
  ImagemProduto, 
  TituloProduto, 
  DescricaoProduto, 
  PrecoProduto, 
  BotaoCarrinho, 
  ConteinerBotoes, 
  ConteinerIcones, 
  IconesWrapper 
} from "./styles";

import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";

const ProdutoCard = ({ produto }) => {
  const { adicionarAoCarrinho } = useCarrinho();
  const { handleFavoritarProduto, isFavoritado } = useFavoritos();
  const { abrirModal } = useProdutos();

  const [adicionado, setAdicionado] = useState(false);

  const handleAdicionarCarrinho = () => {
    adicionarAoCarrinho(produto);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2000);
  };

  return (
    <CardProduto>
      <ImagemProduto src={produto.src} alt={produto.alt} />
      <TituloProduto>{produto.titulo}</TituloProduto>
      <DescricaoProduto>{produto.descricao}</DescricaoProduto>
      <PrecoProduto>R$ {produto.preco}</PrecoProduto>

      <ConteinerBotoes>
        <BotaoCarrinho onClick={handleAdicionarCarrinho}>
          {adicionado ? "Adicionado ✔️" : "Adicionar ao carrinho"}
        </BotaoCarrinho>

        <ConteinerIcones>
          <IconesWrapper
            onClick={() => handleFavoritarProduto(produto)}
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
