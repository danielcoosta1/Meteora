import {
  BotaoCarrinho,
  CardProduto,
  ConteinerBotoes,
  ConteinerIcones,
  ConteinerTitulo,
  DescricaoProduto,
  GridProdutos,
  IconesWrapper,
  ImagemProduto,
  PrecoProduto,
  SecaoProdutos,
  Titulo,
  TituloProduto,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";

import { useFavoritos } from "../../hooks/useFavoritos";

import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";

import produtosBombando from "../../mocks/produtosBombando.json";
import ModoAmpliar from "../ModoAmpliar";

const ProdutosBombando = () => {
  const { adicionarAoCarrinho, produtoAmpliado, abrirModal } = useCarrinho();

  const { handleFavoritarProduto, isFavoritado } = useFavoritos();

  return (
    <SecaoProdutos>
      <ConteinerTitulo>
        <Titulo>Produtos que estão bombando!</Titulo>
      </ConteinerTitulo>

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
