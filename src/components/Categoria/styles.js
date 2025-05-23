import styled from "styled-components";

export const SecaoCategorias = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const GridCategorias = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  padding: 0 1rem;
`;

export const CardCategoria = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImagemCategoria = styled.img`
  width: 100%;
  max-width: 180px;
  border-radius: 8px;
`;

export const Descricao = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.5rem 0;
  font-weight: bold;
  font-size: 0.9rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
