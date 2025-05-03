import styled from "styled-components";

const NavEstilizada = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  background-color: #000000;
`;

const ConteinerEsquerdaEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
 
`;

const ConteinerDireitoEstilizado = styled.section`
  display: flex;
  align-items: center;

  gap: 10rem;
`;

const CampoFormSearch = styled.form`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const InputEstilizado = styled.input`
  background: #ffffff;
  border: 1px solid #ced4da;
  color: #ced4da;
  width: 60%;
  padding: 1rem;

  &::placeholder {
    color: #6c757d;
  }
`;

const ContainerIcones = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const IconeCarrinho = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #daff01;
    color: #000;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 999px;
  }
`;

const IconeFavoritos = styled.div`
  position: relative;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  transition: transform 0.2s ease;

  &.ativo {
    color: #daff01;
  }

  &:hover {
    transform: scale(1.05);
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #daff01;
    color: #000;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 999px;
  }
`;

const ListaEstilizada = styled.ul`
  display: flex;
  gap: 1rem;

  a {
    color: #ffffff;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }

    &.active {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

const ImgEstilizada = styled.img``;

const ContainerAuth = styled.div`
  display: flex;
  gap: 1rem;

  a button {
    padding: 0.75rem 1.5rem;
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  a button:hover {
    background-color: #ffffff;
    color: #000000;
  }

  a.active button {
    background-color: #daff01;
    color: #000000;
    font-weight: bold;
  }
`;

export {
  ImgEstilizada,
  InputEstilizado,
  NavEstilizada,
  ConteinerEsquerdaEstilizado,
  ListaEstilizada,
  ConteinerDireitoEstilizado,
  ContainerIcones,
  IconeCarrinho,
  IconeFavoritos,
  CampoFormSearch,
  Button,
  ContainerAuth,
};
