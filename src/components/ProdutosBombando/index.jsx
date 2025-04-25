import {
  BotaoCarrinho,
  CardProduto,
  ConteinerBotoes,
  ConteinerIcones,
  DescricaoProduto,
  GridProdutos,
  IconesWrapper,
  ImagemProduto,
  PrecoProduto,
  SecaoProdutos,
  TituloProduto,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";

import { useFavoritos } from "../../hooks/useFavoritos";

import { FaHeart, FaRegHeart, FaExpand, FaFire } from "react-icons/fa";

import produtosBombando from "../../mocks/produtosBombando.json";
import ModoAmpliar from "../ModoAmpliar";
import TituloSecao from "../TituloDefaultSecao";

const ProdutosBombando = () => {
  const { adicionarAoCarrinho, produtoAmpliado, abrirModal } = useCarrinho();

  const { handleFavoritarProduto, isFavoritado } = useFavoritos();

  return (
    <SecaoProdutos>
      <TituloSecao texto="Produtos que estão bombando" Icone={FaFire} />

      <GridProdutos>
        {produtosBombando.map((produto) => (
          <CardProduto key={produto.id}>
            <ImagemProduto src={produto.src} alt={produto.alt} />
            <TituloProduto>{produto.titulo}</TituloProduto>
            <DescricaoProduto>{produto.descricao}</DescricaoProduto>
            <PrecoProduto>R$ {produto.preco}</PrecoProduto>
            <ConteinerBotoes>
              <BotaoCarrinho onClick={() => adicionarAoCarrinho(produto)}>
                Adicionar ao carrinho
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
        ))}
      </GridProdutos>
      {produtoAmpliado && <ModoAmpliar />}
    </SecaoProdutos>
  );
};

export default ProdutosBombando;
