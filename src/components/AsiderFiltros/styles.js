import styled from "styled-components";

export const AsideEstilizado = styled.aside`
  width: 300px;

  padding: 20px;
  gap: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
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
`;

export const ListaDeFiltros = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: max-height 0.3s ease, opacity 0.3s ease;

  li {
    display: block;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }

    &.ativo {
      background-color: #e0e0e0;
    }

    button {
      background: none;
      border: none;
      color: #333;
      font-size: 1rem;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }
  }
`;

export const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ItemListaEstilizado = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const TituloFiltro= styled.h2`
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 10px;
`;
