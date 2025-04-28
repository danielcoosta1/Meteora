import styled from "styled-components";

const SecaoProdutos = styled.section`
  text-align: start;
`;

const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

export { SecaoProdutos, GridProdutos };
