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
const Produtos = () => {
  return (
    <SecaoProdutos>
      <Titulo>Produtos que estão bombando!</Titulo>
      <GridProdutos>
        {produtos.map((produto) => (
          <CardProduto>
            <ImagemProduto src={produto.src} alt={produto.alt} />
            <TituloProduto>{produto.titulo}</TituloProduto>
            <DescricaoProduto>{produto.descricao}</DescricaoProduto>
            <PrecoProduto>R$ {produto.preco}</PrecoProduto>
            <BotaoCarrinho >Adicionar ao carrinho</BotaoCarrinho>
          </CardProduto>
        ))}
      </GridProdutos>
    </SecaoProdutos>
  );
};

export default Produtos;
