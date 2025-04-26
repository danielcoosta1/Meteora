import {
  BotaoCarrinho,
  Card,
  ContainerProdutos,
  ContainerTitulo,
  ConteinerBotoes,
  ConteinerIcones,
  DescricaoProduto,
  GridProdutos,
  IconesWrapper,
  ImagemProduto,
  PrecoProduto,
  TituloProduto,
} from "./styles";
import { BiEraser } from "react-icons/bi";
import { MdCheckroom } from "react-icons/md";

import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";

import Categorias from "../../components/Categoria";
import { useCarrinho } from "../../hooks/useCarrinho";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";

import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";
import { useFavoritos } from "../../hooks/useFavoritos";
import ModoAmpliar from "../../components/ModoAmpliar";
import TituloSecao from "../../components/TituloDefaultSecao";

import { useProdutos } from "../../hooks/useProdutos";
import BotaoLimpar from "../../components/BotaoLimpar";
const Produtos = () => {
  const { handleFavoritarProduto, isFavoritado } = useFavoritos();
  const { adicionarAoCarrinho, menuAberto } = useCarrinho(); // Importa o hook de categorias
  const {
    abrirModal,
    produtoAmpliado,
    produtosParaExibir,
    setCategoriaSelecionada,
    categoriaSelecionada,
  } = useProdutos(); // Importa o hook de carrinho

  return (
    <>
      <BarraDeNavegacao />
      <ContainerProdutos>
        <Categorias />
        <ContainerTitulo>
          <TituloSecao
            texto="Todos os produtos dísponíveis"
            Icone={MdCheckroom}
          />
          {categoriaSelecionada && (
            <BotaoLimpar
              onClick={() => setCategoriaSelecionada(null)}
              Icone={BiEraser}
            >
              Limpar filtro
            </BotaoLimpar>
          )}
        </ContainerTitulo>

        <GridProdutos>
          {produtosParaExibir.map((produto) => (
            <Card key={produto.id}>
              <ImagemProduto src={produto.src} alt={produto.alt} />
              <TituloProduto>{produto.titulo}</TituloProduto>
              <DescricaoProduto>{produto.descricao}</DescricaoProduto>
              <PrecoProduto>R$ {produto.preco.toFixed(2)}</PrecoProduto>
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
            </Card>
          ))}
        </GridProdutos>
        {menuAberto && <MenuLateralCarrinho />}
        {produtoAmpliado && <ModoAmpliar />}
      </ContainerProdutos>
    </>
  );
};

export default Produtos;
