import {
  BotaoCarrinho,
  CardProduto,
  ConteinerTitulo,
  DescricaoProduto,
  GridProdutos,
  IconeFiltrar,
  ImagemProduto,
  PrecoProduto,
  SecaoProdutos,
  Titulo,
  TituloProduto,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";

import { BiEraser } from "react-icons/bi";
import produtosBombando from "../../mocks/produtosBombando.json";

const Produtos = ({ todosProdutos }) => {
  const {
    categoriaSelecionada,
    setCategoriaSelecionada,
    termoBusca,
    adicionarAoCarrinho,
  } = useCarrinho();

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
            <BotaoCarrinho onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao carrinho
            </BotaoCarrinho>
          </CardProduto>
        ))}
      </GridProdutos>
    </SecaoProdutos>
  );
};

export default Produtos;
