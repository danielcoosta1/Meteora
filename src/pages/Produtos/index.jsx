import {
  BotaoCarrinho,
  Card,
  ContainerProdutos,
  ContainerTitulo,
  ContainerWrapper,
  ConteinerBotoes,
  ConteinerIcones,
  DescricaoProduto,
  GridProdutos,
  IconesWrapper,
  ImagemProduto,
  PrecoProduto,
  TituloProduto,
  FiltrosAplicados,
  MensagemNaoEncontrada,
  FiltroSpan,
  IconeRemover,
} from "./styles";
import { BiEraser } from "react-icons/bi";

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
import AsiderFiltros from "../../components/AsiderFiltros";

const Produtos = () => {
  const { handleFavoritarProduto, isFavoritado } = useFavoritos();
  const { adicionarAoCarrinho, menuAberto } = useCarrinho(); // Importa o hook de categorias
  const {
    abrirModal,
    produtoAmpliado,
    produtosParaExibir,
    haProdutosFiltrados,
    limparFiltro,
    limparFiltroCategoria,
    limparFiltroBusca,
    limparFiltroPreco,
    gerarFiltrosAplicados,
  } = useProdutos();

  // Função para renderizar os filtros aplicados com o "X"
  const renderFiltros = () => {
    const filtros = gerarFiltrosAplicados();

    return filtros.map((filtro) => (
      <FiltroSpan key={filtro.key}>
        {filtro}
        {/* Verifica se o filtro tem um ícone de remover */}
        {filtro.key !== "nenhum" && (
          <IconeRemover onClick={() => removerFiltro(filtro.key)} />
        )}
      </FiltroSpan>
    ));
  };

  // Função de remoção de filtro específico
  const removerFiltro = (key) => {
    if (key === "categoria") {
      limparFiltroCategoria();
    } else if (key === "busca") {
      limparFiltroBusca();
    } else if (key === "preco") {
      limparFiltroPreco();
    }
  };
  // Definir o título dinamicamente com base nos filtros
  const titulo = haProdutosFiltrados
    ? "Filtrando por:"
    : "Todos os produtos disponíveis";

  return (
    <>
      <BarraDeNavegacao />
      <ContainerProdutos>
        <AsiderFiltros />
        <ContainerWrapper>
          <Categorias />
          <ContainerTitulo>
            <TituloSecao texto={titulo} />

            {haProdutosFiltrados && (
              <BotaoLimpar
                onClick={limparFiltro}
                Icone={BiEraser}
                aria-label="Limpar filtros"
              >
                Limpar filtros
              </BotaoLimpar>
            )}
          </ContainerTitulo>
          <FiltrosAplicados>{renderFiltros()}</FiltrosAplicados>
          <GridProdutos>
            {produtosParaExibir.length === 0 ? (
              <MensagemNaoEncontrada>
                Não há produtos disponíveis para os filtros aplicados.
              </MensagemNaoEncontrada>
            ) : (
              produtosParaExibir.map((produto) => (
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
              ))
            )}
          </GridProdutos>
          {menuAberto && <MenuLateralCarrinho />}
          {produtoAmpliado && <ModoAmpliar />}
        </ContainerWrapper>
      </ContainerProdutos>
    </>
  );
};

export default Produtos;
