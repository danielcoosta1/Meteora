import {
  BotaoCarrinho,
  CardProduto,
  ConteinerBotoes,
  ConteinerIcones,
  ConteinerTitulo,
  DescricaoProduto,
  GridProdutos,
  IconeFiltrar,
  IconesWrapper,
  ImagemProduto,
  PrecoProduto,
  SecaoProdutos,
  Titulo,
  TituloProduto,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";

import {useFavoritos} from "../../hooks/useFavoritos";

import { BiEraser } from "react-icons/bi";
import { FaHeart, FaRegHeart, FaExpand } from "react-icons/fa";

import produtosBombando from "../../mocks/produtosBombando.json";

const Produtos = ({ todosProdutos }) => {
  const {
    categoriaSelecionada,
    setCategoriaSelecionada,
    termoBusca,
    adicionarAoCarrinho,
  } = useCarrinho();

  const { handleFavoritarProduto, isFavoritado } = useFavoritos();

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
      : produtosBombando;

  return (
    <SecaoProdutos>
      <ConteinerTitulo>
        <Titulo>
          {termoBusca
            ? `Resultados para: "${termoBusca}"`
            : categoriaSelecionada
            ? `Exibindo: ${categoriaSelecionada}`
            : "Produtos que estão bombando!"}
        </Titulo>
        {categoriaSelecionada && (
          <IconeFiltrar onClick={() => setCategoriaSelecionada(null)}>
            <BiEraser
              size={20}
              style={{ marginRight: "8px", color: " #9353ff" }}
            />
            Limpar filtro
          </IconeFiltrar>
        )}
      </ConteinerTitulo>

      <GridProdutos>
        {produtosParaExibir.map((produto) => (
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
                  onClick={() => handleFavoritarProduto(produto.id)}
                  $favoritado={isFavoritado(produto.id)}
                >
                  {isFavoritado(produto.id) ? <FaHeart /> : <FaRegHeart />}
                </IconesWrapper>
                <IconesWrapper>
                  <FaExpand />
                </IconesWrapper>
              </ConteinerIcones>
            </ConteinerBotoes>
          </CardProduto>
        ))}
      </GridProdutos>
    </SecaoProdutos>
  );
};

export default Produtos;
