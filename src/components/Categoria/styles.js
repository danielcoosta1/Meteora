import styled from "styled-components";

export const SecaoCategorias = styled.section`
  padding: 4rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  @media (max-width: 480px) {
    padding: 1.75rem 0;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const GridCategorias = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.75rem;
  }
  
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
