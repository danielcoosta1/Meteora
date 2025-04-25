import {
  BotaoCarrinho,
  Card,
  ContainerProdutos,
  ConteinerBotoes,
  ConteinerIcones,
  DescricaoProduto,
  GridProdutos,
  IconesWrapper,
  ImagemProduto,
  PrecoProduto,
  TituloProduto,
} from "./styles";

import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";
import todosProdutos from "../../mocks/todosProdutos.json";
import Categorias from "../../components/Categoria";
import { useCarrinho } from "../../hooks/useCarrinho";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";

import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";
import { useFavoritos } from "../../hooks/useFavoritos";
import ModoAmpliar from "../../components/ModoAmpliar";
const Produtos = () => {
  const { handleFavoritarProduto, isFavoritado } = useFavoritos();
  const {
    produtoAmpliado,
    abrirModal,
    categoriaSelecionada,
    termoBusca,
    menuAberto,
    adicionarAoCarrinho,
  } = useCarrinho(); // Importa o hook de categorias
  // Filtra os produtos com base na categoria selecionada e no termo de busca
  const produtosFiltradosPorCategoria = categoriaSelecionada
    ? todosProdutos.filter(
        (produto) =>
          //Se a categoria do produto for igual a categoria selecionada, retorna o produto
          produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
      )
    : todosProdutos; // Se não houver categoria selecionada, retorna todos os produtos

  // Filtra os produtos com base no termo de busca
  const produtosFiltradosPorBusca = termoBusca
    ? produtosFiltradosPorCategoria.filter((produto) =>
        produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      )
    : produtosFiltradosPorCategoria;

  // Se houver categoria selecionada ou termo de busca, exibe os produtos filtrados, caso contrário, exibe os produtos bombando
  const produtosParaExibir =
    categoriaSelecionada || termoBusca
      ? produtosFiltradosPorBusca
      : todosProdutos;

  return (
    <>
      <BarraDeNavegacao />
      <ContainerProdutos>
        <Categorias />
        <h1>Todos os produtos disponíveis</h1>
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
