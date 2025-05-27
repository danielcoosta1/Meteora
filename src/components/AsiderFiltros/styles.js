import styled from "styled-components";

export const AsideEstilizado = styled.aside`
  width: 300px;
  padding: 20px;
  gap: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;

  @media (max-width: 968px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    gap: 5px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
    padding: 0;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

export const TituloAside = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: #333;
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 20px;
  border-bottom: 3px solid #ddd;
  margin-top: 50px;

  @media (max-width: 968px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 40px;
    border-bottom: 2px solid #ddd;
    padding: 0.25rem 1rem;
  }
`;

export const ListaDeFiltros = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: max-height 0.3s ease, opacity 0.3s ease;

  @media (max-width: 968px) {
    gap: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    
  }

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
   
`;

export const ItemListaFiltro = styled.li`
  display: block;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px 20px;

  &:hover {
    background-color: #e0e0e0;
  }

  &.ativo {
    background-color: #e0e0e0;
  }

  @media (max-width: 968px) {
    padding: 5px 10px;
  }
`;

export const BotaoFiltro = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;

  @media (max-width: 968px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ListaEstilizada = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 968px) {
    justify-content: space-between;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const ItemListaEstilizado = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;

  @media (max-width: 968px) {
    padding: 5px;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 5px;
    margin-bottom: 0;
  }
`;

export const TituloFiltro = styled.h2`
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 968px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
`;
