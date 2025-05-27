import styled from "styled-components";

import { BiX } from "react-icons/bi";

export const ContainerProdutos = styled.main`
  display: flex;
  
  @media (max-width: 868px) {
    padding: 2rem 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;

;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FiltrosAplicados = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;


  
`;

export const FiltroSpan = styled.span`
  display: inline-block;
  margin-right: 10px;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 14px;
  color: #333;
  position: relative;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 8px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`;

export const IconeRemover = styled(BiX)`
  position: absolute;
  top: -7px;
  right: -7px;
  cursor: pointer;
  font-size: 16px;
  color: #000;

  &:hover {
    scale: 1.4;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    top: -5px;
    right: -5px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    top: -3px;
    right: -3px;
  }
`;

export const GridProdutos = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
 
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  }

`;

export const MensagemNaoEncontrada = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff4747; /* Um tom de vermelho para chamar atenção */
  padding: 20px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;
