import {
  BotaoCarrinho,
  CardProduto,
  DescricaoProduto,
  GridProdutos,
  ImagemProduto,
  PrecoProduto,
  SecaoProdutos,
  Titulo,
  TituloProduto,
} from "./styles";
import produtosBombando from "../../mocks/produtosBombando.json";
const Produtos = ({
  adicionarAoCarrinho,
  todosProdutos,
  categoriaSelecionada,
}) => {
  const produtosFiltrados = categoriaSelecionada
    ? todosProdutos.filter(
        (produto) =>
          produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
      )
    : produtosBombando;

  const mostrarProdutosFiltrados =
    categoriaSelecionada && produtosFiltrados.length > 0;
  return (
    <SecaoProdutos>
      <Titulo>
        {mostrarProdutosFiltrados
          ? `Exibindo: ${categoriaSelecionada}`
          : "Produtos que estão bombando!"}
      </Titulo>
      <GridProdutos>
        {produtosFiltrados.map((produto) => (
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
