import {
  ContainerProdutos,
  ContainerTitulo,
  ContainerWrapper,
  GridProdutos,
  FiltrosAplicados,
  MensagemNaoEncontrada,
  FiltroSpan,
  IconeRemover,
} from "./styles";
import { BiEraser } from "react-icons/bi";

import Categorias from "../../components/Categoria";
import { useCarrinho } from "../../hooks/useCarrinho";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";

import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";

import ModoAmpliar from "../../components/ModoAmpliar";
import TituloSecao from "../../components/TituloDefaultSecao";

import { useProdutos } from "../../hooks/useProdutos";
import BotaoLimpar from "../../components/BotaoLimpar";
import AsiderFiltros from "../../components/AsiderFiltros";
import ProdutoCard from "../../components/ProdutoCard";

const Produtos = () => {
  const { menuAberto } = useCarrinho(); // Importa o hook de categorias
  const {
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
                <ProdutoCard key={produto.id} produto={produto} />
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
