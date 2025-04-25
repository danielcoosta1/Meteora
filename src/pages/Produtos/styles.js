import styled from "styled-components";

export const ContainerProdutos = styled.main`
  max-width: 1400px; /* ou o limite que preferir */
  margin: 0 auto;
  
  h1{
    margin-bottom: 2rem;
  }
`;

export const GridProdutos = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
 
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: #fff;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: #666;
  }

  span {
    font-weight: bold;
    color: #222;
  }
`;
