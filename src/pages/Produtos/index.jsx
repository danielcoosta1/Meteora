import { Card, ContainerProdutos, GridProdutos } from "./styles";

import todosProdutos from "../../mocks/todosProdutos.json";
import Categorias from "../../components/Categoria";
import { useCarrinho } from "../../hooks/useCarrinho";
import BarraDeNavegacao from "../../components/BarraDeNavegacao";

import MenuLateralCarrinho from "../../components/MenuLateralCarrinho";
const Produtos = () => {

  const { categoriaSelecionada, termoBusca, menuAberto } = useCarrinho(); // Importa o hook de categorias
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
              <img src={produto.src} alt={produto.alt} />
              <h3>{produto.titulo}</h3>
              <p>{produto.descricao}</p>
              <span>R$ {produto.preco.toFixed(2)}</span>
            </Card>
          ))}
        </GridProdutos>
        {menuAberto && <MenuLateralCarrinho />}
      </ContainerProdutos>
    </>
  );
};

export default Produtos;
