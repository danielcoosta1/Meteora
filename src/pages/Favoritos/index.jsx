import { FaExpand, FaHeart, FaRegHeart } from "react-icons/fa";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import { useCarrinho } from "../../hooks/useCarrinho";
import { useFavoritos } from "../../hooks/useFavoritos";
import { BiEraser } from "react-icons/bi";
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
  TituloProduto,
  ConteinerVazio,
  HeaderFavoritos,
  LimparFavoritos,
} from "./styles";

import imgBannerFavoritos from "/assets/images/banner-carrinho.png";

import ModoAmpliar from "../../components/ModoAmpliar";
import VoltarHome from "../../components/VoltarHome";
import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";

const Favoritos = () => {
  const {
    favoritos,
    handleFavoritarProduto,
    isFavoritado,
    haItensFavoritados,
    limparFavoritos,
  } = useFavoritos();
  const { abrirModal, produtoAmpliado } = useCarrinho();
  const { menuAberto } = useCarrinho();

  const { adicionarAoCarrinho } = useCarrinho();

  return (
    <>
      <BarraDeNavegacao />
      <BannerFavoritos>
        <img src={imgBannerFavoritos} />
      </BannerFavoritos>
      <SecaoFavoritos>
        <HeaderFavoritos>
          {haItensFavoritados && (
            <LimparFavoritos onClick={limparFavoritos}>
              <BiEraser
                size={20}
                style={{ marginRight: "8px", color: " #9353ff" }}
              />
              Limpar favoritos
            </LimparFavoritos>
          )}
        </HeaderFavoritos>

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
                    <IconesWrapper onClick={() => abrirModal(produto)}>
                      <FaExpand />
                    </IconesWrapper>
                  </ConteinerIcones>
                </ConteinerBotoes>
              </CardProdutos>
            ))
          )}
        </GridProdutos>
      </SecaoFavoritos>
      {menuAberto && <MenuLateralCarrinho />}
      {produtoAmpliado && <ModoAmpliar />}
    </>
  );
};
export default Favoritos;
