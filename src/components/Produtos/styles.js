import styled from "styled-components";

const SecaoProdutos = styled.section`
  text-align: start;
`;

const Titulo = styled.h2`
  font-size: 1.8rem;
`;
const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const CardProduto = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 350px; /* ou o tamanho que achar ideal */
  object-fit: cover;
  border-radius: 8px; /* opcional, se quiser deixar com cantos arredondados */
`;

const TituloProduto = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
`;
const DescricaoProduto = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const PrecoProduto = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;
const BotaoCarrinho = styled.button`
  background-color: #9353ff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ConteinerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const IconeFiltrar = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000;
  border: 1px solid #9353ff;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    transition: color 0.3s ease;
    transform: scale(1.05);
  }
`;

export {
  SecaoProdutos,
  Titulo,
  GridProdutos,
  CardProduto,
  TituloProduto,
  ImagemProduto,
  DescricaoProduto,
  PrecoProduto,
  BotaoCarrinho,
  ConteinerTitulo,
  IconeFiltrar,
};
