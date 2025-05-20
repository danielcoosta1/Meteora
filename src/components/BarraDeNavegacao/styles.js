import styled from "styled-components";

export const BotaoHamburguer = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  padding: 0;
  z-index: 10;

  div {
    width: 1.5rem;
    height: 0.15rem;
    background: #daff01;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavEstilizada = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background-color: #000000;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const ConteinerEsquerdaEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ListaEstilizada = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: ${({ $menuAberto }) => ($menuAberto ? "flex" : "none")};
    position: fixed;
    top: 54px;
    left: 0;
    right: 0;
    background-color: #000000;
    flex-direction: column;
    padding: 1rem 0;
    z-index: 9;
    gap: .5rem;
  }

  li a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.8rem;

    &.ativo {
      color: #daff01;
    }

    &:hover {
      color: #daff01;
    }
  }
`;

export const ConteinerDireitoEstilizado = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ContainerIcones = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const IconeCarrinho = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;

  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background-color: #daff01;
    color: #000000;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2rem 0.4rem;
    border-radius: 50%;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 768px) {
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    span {
      font-size: 0.45rem;
      padding: 0.1rem 0.3rem;
    }
  }
`;

export const IconeFavoritos = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 1.8rem;
  color: #fff;

  &.ativo {
    color: #daff01;
  }

  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background-color: #daff01;
    color: #000000;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2rem 0.4rem;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    span {
      font-size: 0.45rem;
      padding: 0.1rem 0.3rem;
    }
  }
`;

export const ImgEstilizada = styled.img`
  width: 120px;
  height: auto;

  @media (max-width: 768px) {
    width: 90px;
  }
`;

export const CampoFormSearch = styled.form`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  gap: 0.5rem;

  button {
    background-color: #daff01;
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    font-weight: 700;
    border-radius: 4px;
    color: #000;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c4d600;
    }
  }
`;

export const Button = styled.button`
  background-color: #daff01;
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 4px;
  color: #000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c4d600;
  }
`;

export const InputEstilizado = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
`;

export const ContainerBuscaMobile = styled.div`
  display: ${({ $mostrar }) => ($mostrar ? "block" : "none")};
  background-color: #000;
  padding: 1rem 2rem;

  @media (min-width: 769px) {
    display: none;
  }
`;
export const CampoBuscaDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`;

export const ContainerAuth = styled.div`
  display: flex;
  gap: 1rem;

  a button {
    background-color: transparent;
    border: 1px solid #daff01;
    color: #daff01;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #daff01;
      color: #000;
    }
  
   
  }

 
`;


export const ContainerLogado = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UsuarioLogado = styled.span`
  color: #fff;
  font-weight: 600;
`;

export const ButtonLogout = styled.button`
  background-color: transparent;
  border: 1px solid #daff01;
  color: #daff01;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #daff01;
    color: #000;
  }
`;
