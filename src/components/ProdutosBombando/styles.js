import styled from "styled-components";

const SecaoProdutos = styled.section`
  text-align: start;
`;

const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export { SecaoProdutos, GridProdutos };
