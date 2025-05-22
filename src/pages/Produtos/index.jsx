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

import ModoAmpliar from "../../components/ModoAmpliar";
import TituloSecao from "../../components/TituloDefaultSecao";

import { useProdutos } from "../../hooks/useProdutos";
import BotaoLimpar from "../../components/BotaoLimpar";
import AsiderFiltros from "../../components/AsiderFiltros";
import ProdutoCard from "../../components/ProdutoCard";

const Produtos = () => {
  // Importa o hook de categorias
  const {
    produtoAmpliado,
    produtosParaExibir,
    haProdutosFiltrados,
    limparFiltro,
    limparFiltroCategoria,
    limparFiltroBusca,
    limparFiltroPreco,
    limparFiltroGenero,
    gerarFiltrosAplicados,
  } = useProdutos();

  // Função de remoção de filtro específico
  const removerFiltro = (tipo) => {
    if (tipo === "categoria") {
      limparFiltroCategoria();
    } else if (tipo === "busca") {
      limparFiltroBusca();
    } else if (tipo === "preco") {
      limparFiltroPreco();
    } else if (tipo === "genero") {
      limparFiltroGenero();
    }
  };
  //Funcao para renderizar de acordo com o retorno da função gerarFiltrosAplicados
  const renderFiltros = () => {
    const filtros = gerarFiltrosAplicados();

    return filtros.map(({ tipo, componente }) => (
      <FiltroSpan key={tipo}>
        {componente}
        {tipo !== "nenhum" && (
          <IconeRemover onClick={() => removerFiltro(tipo)} />
        )}
      </FiltroSpan>
    ));
  };

  // Definir o título dinamicamente com base nos filtros
  const titulo = haProdutosFiltrados
    ? "Filtrando por:"
    : "Todos os produtos disponíveis";

  return (
    <>
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

          {produtoAmpliado && <ModoAmpliar />}
        </ContainerWrapper>
      </ContainerProdutos>
    </>
  );
};

export default Produtos;
