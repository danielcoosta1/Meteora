import { useFavoritos } from "../../hooks/useFavoritos";
import { BiEraser } from "react-icons/bi";
import { LuHandHeart } from "react-icons/lu";
import {
  BannerFavoritos,
  GridProdutos,
  SecaoFavoritos,
  ConteinerVazio,
  HeaderFavoritos,
} from "./styles";

import imgBannerFavoritos from "/assets/images/banner-carrinho.png";

import ModoAmpliar from "../../components/ModoAmpliar";
import VoltarHome from "../../components/VoltarHome";

import TituloSecao from "../../components/TituloDefaultSecao";
import { useProdutos } from "../../hooks/useProdutos";

import BotaoLimpar from "../../components/BotaoLimpar";
import ProdutoCard from "../../components/ProdutoCard";

const Favoritos = () => {
  const {
    favoritos,

    haItensFavoritados,
    limparFavoritos,
  } = useFavoritos();

  const { produtoAmpliado } = useProdutos();

  return (
    <>
      <BannerFavoritos>
        <img src={imgBannerFavoritos} />
      </BannerFavoritos>
      <SecaoFavoritos>
        <HeaderFavoritos>
          <TituloSecao texto="Favoritos" Icone={LuHandHeart} />
          {haItensFavoritados && (
            <BotaoLimpar onClick={limparFavoritos} Icone={BiEraser}>
              Limpar favoritos
            </BotaoLimpar>
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
              <ProdutoCard key={produto.id} produto={produto} />
            ))
          )}
        </GridProdutos>
      </SecaoFavoritos>

      {produtoAmpliado && <ModoAmpliar />}
    </>
  );
};
export default Favoritos;
