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
import produtos from "../../mocks/produtos.json";
const Produtos = ({adicionarAoCarrinho}) => {
  return (
    <SecaoProdutos>
      <Titulo>Produtos que estão bombando!</Titulo>
      <GridProdutos>
        {produtos.map((produto) => (
          <CardProduto key={produto.id}>
            <ImagemProduto src={produto.src} alt={produto.alt} />
            <TituloProduto>{produto.titulo}</TituloProduto>
            <DescricaoProduto>{produto.descricao}</DescricaoProduto>
            <PrecoProduto>R$ {produto.preco}</PrecoProduto>
            <BotaoCarrinho onClick={()=>adicionarAoCarrinho(produto)}>Adicionar ao carrinho</BotaoCarrinho>
          </CardProduto>
        ))}
      </GridProdutos>
    </SecaoProdutos>
  );
};

export default Produtos;
