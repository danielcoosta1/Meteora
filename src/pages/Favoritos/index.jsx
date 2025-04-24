import { FaExpand, FaHeart, FaRegHeart } from "react-icons/fa";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import { useCarrinho } from "../../hooks/useCarrinho";
import { useFavoritos } from "../../hooks/useFavoritos";
import {
  BannerFavoritos,
  BotaoCarrinho,
  CardProdutos,
  ConteinerBotoes,
  ConteinerIcones,
  DescricaoProduto,
  GridProdutos,
  IconesWrapper,
  ImagemProduto,
  PrecoProduto,
  SecaoFavoritos,
  Titulo,
  TituloProduto,
  ConteinerVazio,
} from "./styles";

import imgBannerFavoritos from "/assets/images/banner-carrinho.png";

import VoltarHome from "../../components/VoltarHome";
import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";

const Favoritos = () => {
  const { favoritos, handleFavoritarProduto, isFavoritado } = useFavoritos();

  const { menuAberto } = useCarrinho();

  const { adicionarAoCarrinho } = useCarrinho();

  const haItensFavoritados = favoritos.length > 0;

  return (
    <>
      <BarraDeNavegacao />
      <BannerFavoritos>
        <img src={imgBannerFavoritos} />
      </BannerFavoritos>
      <SecaoFavoritos>
        <Titulo>Seus favoritos</Titulo>

        <GridProdutos $isEmpty={!haItensFavoritados}>
          {!haItensFavoritados ? (
            <ConteinerVazio>
              <h1>Não há itens favoritados</h1>
              <VoltarHome>Voltar</VoltarHome>
            </ConteinerVazio>
          ) : (
            favoritos.map((produto) => (
              <CardProdutos key={produto.id}>
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
                    <IconesWrapper>
                      <FaExpand />
                    </IconesWrapper>
                  </ConteinerIcones>
                </ConteinerBotoes>
              </CardProdutos>
            ))
          )}
        </GridProdutos>
      </SecaoFavoritos>
      {menuAberto && (
          <MenuLateralCarrinho />
        )}
    </>
  );
};
export default Favoritos;
