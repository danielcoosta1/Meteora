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

import { BiEraser } from "react-icons/bi";
import produtosBombando from "../../mocks/produtosBombando.json";

const Produtos = ({
  adicionarAoCarrinho,
  todosProdutos,
  categoriaSelecionada,
  setCategoriaSelecionada,
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
      <ConteinerTitulo>
        <Titulo>
          {mostrarProdutosFiltrados
            ? `Exibindo: ${categoriaSelecionada}`
            : "Produtos que estão bombando!"}
        </Titulo>
        {categoriaSelecionada && (
          <IconeFiltrar onClick={() => setCategoriaSelecionada(null)}>
            <BiEraser size={20} style={{ marginRight: "8px", color: " #9353ff" }}/>
            Limpar filtro
          </IconeFiltrar>
        )}
      </ConteinerTitulo>

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
