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
  transition: transform 0.3s ease;

  ${({ $ativo }) =>
    $ativo &&
    `
    transform: translateX(-10px);
  `}

  div {
    width: 1.5rem;
    height: 0.15rem;
    background: #daff01;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  ${({ $ativo }) =>
    $ativo &&
    `
    div:nth-child(1) {
      transform: rotate(45deg);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: rotate(-45deg);
    }
  `}

  @media (max-width: 1300px) {
    display: flex;
  }

  @media (max-width: 450px) {
    div {
      margin-left: 4rem;
    }
  }
  @media (max-width: 400px) {
    div {
      margin-left: 3rem;
    }
  }
`;

export const NavEstilizada = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background-color: #000000;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 468px) {
    gap: 0.5rem;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const ConteinerEsquerdaEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const ListaEstilizada = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    position: fixed;
    top: 100px;
    right: ${({ $menuAberto }) => ($menuAberto ? "0" : "-300px")};
    height: 100vh;
    width: 300px;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.4);
    padding: 5rem 2rem 2rem 2rem;
    z-index: 9;
    transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    opacity: ${({ $menuAberto }) => ($menuAberto ? 1 : 0)};
    transform: ${({ $menuAberto }) =>
      $menuAberto ? "translateX(0)" : "translateX(20px)"};
    display: flex;
    gap: 1rem;
    text-align: end;
  }

  li a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.8rem;
    position: relative;
    transition: color 0.2s ease-in-out;

    &.ativo {
      color: #daff01;
    }

    &:hover {
      color: #daff01;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: #daff01;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 780px) {
    top: ${({ $alturaNav }) => `${$alturaNav}px`};
  }
  @media (max-width: 450px) {
    width: 40%;
    top: ${({ $alturaNav }) => `${$alturaNav}px`};
  }

  @media (max-width: 400px) {
    width: 40%;
    top: ${({ $alturaNav }) => `${$alturaNav}px`};
  }
`;

export const ConteinerDireitoEstilizado = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 450px) {
    gap: 1rem;
  }

  @media (max-width: 400px) {
    margin-top: 1rem;
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
    gap: 1rem;
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
      width: 1.7rem;
      height: 1.7rem;
    }
    span {
      font-size: 0.55rem;
      padding: 0.15rem 0.35rem;
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
      font-size: 0.55rem;
      padding: 0.15rem 0.35rem;
    }
  }
`;

export const ImgEstilizada = styled.img`
  width: 100%;
  height: auto;
  min-width: 70px;
`;

export const CampoFormSearch = styled.form`
  display: flex;
  width: 100%;

  margin: 0 auto;
  gap: 0.5rem;
  object-fit: cover;
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

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    padding: 0 0.4rem;
    font-size: 0.7rem;
  }
`;

export const InputEstilizado = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  @media (max-width: 450px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
`;

export const ContainerBuscaMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $mostrar }) => ($mostrar ? "flex" : "none")};
    width: 100%;
    position: fixed;
    top: ${({ $alturaNav }) => `${$alturaNav}px`};
    left: 0;
    background-color: #000;
    padding: 1rem 2rem;
    z-index: 999;
  }
`;

export const CampoBuscaDesktop = styled.div`
  display: none;

  @media (min-width: 860px) {
    display: block;
  }
`;

export const BotaoAuth = styled.button`
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #daff01; /* verde */
  background-color: transparent;
  border: 1px solid #daff01;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #daff01;
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.7rem;
  }

  @media (max-width: 430px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.65rem;
  }
`;

export const ContainerAuth = styled.div`
  display: flex;
  gap: 1rem;

  &.versao-desktop {
    @media (max-width: 1300px) {
      display: none;
    }
  }
`;


export const ContainerLogado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;

  &.versao-desktop {
    @media (max-width: 1300px) {
      display: none;
    }
  }
`;
export const UsuarioLogado = styled.span`
  color: #fff;
  font-weight: 600;

  @media (max-width: 490px) {
    font-size: 0.8rem;
  }
  @media (max-width: 420px) {
    font-size: 0.7rem;
  }
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

  @media (max-width: 490px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }

  @media (max-width: 420px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.7rem;
  }
`;

export const ContainerMenuMobile = styled.div`
  display: none;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
`;
