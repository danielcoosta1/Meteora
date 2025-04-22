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

  const produtosFiltradosPorCategoria = categoriaSelecionada
    ? todosProdutos.filter(
        (produto) =>
          produto.categoria.toLowerCase() === categoriaSelecionada.toLowerCase()
      )
    : todosProdutos;

  const produtosFiltradosPorBusca = termoBusca
    ? produtosFiltradosPorCategoria.filter((produto) =>
        produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      )
    : produtosFiltradosPorCategoria;

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
