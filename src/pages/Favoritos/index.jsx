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
  HeaderFavoritos,
  LimparFavoritos,
} from "./styles";

import imgBannerFavoritos from "/assets/images/banner-carrinho.png";

import ModoAmpliar from "../../components/ModoAmpliar";
import VoltarHome from "../../components/VoltarHome";
import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";


const Favoritos = () => {
  const { favoritos, handleFavoritarProduto, isFavoritado, setFavoritos } =
    useFavoritos();
  const { abrirModal, produtoAmpliado } = useCarrinho();
  const { menuAberto } = useCarrinho();

  const { adicionarAoCarrinho } = useCarrinho();

  const haItensFavoritados = favoritos.length > 0;

  const limparFavoritos = () => {
    if (!haItensFavoritados) {
      // Se não houver itens favoritados, não faz nada
      alert("Não há itens favoritados para limpar!");
      return;
    }

    // Pergunta ao usuário se ele realmente deseja limpar os favoritos
    window.confirm(
      "Você tem certeza que deseja limpar todos os favoritos?"
    );
    // Se o usuário confirmar, limpa os favoritos
    
    // Limpa os favoritos
    setFavoritos([]);
  };

  return (
    <>
      <BarraDeNavegacao />
      <BannerFavoritos>
        <img src={imgBannerFavoritos} />
      </BannerFavoritos>
      <SecaoFavoritos>
        <HeaderFavoritos>
          <Titulo>Seus favoritos</Titulo>
          <LimparFavoritos onClick={limparFavoritos}>
            Limpar favoritos
          </LimparFavoritos>
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
