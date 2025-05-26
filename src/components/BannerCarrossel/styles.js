import styled, { css } from "styled-components";

const CarrosselConteiner = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${(props) =>
    props.$ativo &&
    css`
      opacity: 1;
      position: relative;
    `}
`;

const Setas = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1rem;
`;

const BotaoSeta = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 1200px) {
    font-size: 1.8rem;
    padding: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.3rem;
  }
`;

const ImagemBanner = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const ConteudoTexto = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 5%;
  color: white;
  text-align: left;

  @media (max-width: 1200px) {

  }
  @media (max-width: 840px) {
    left: 10%;
    bottom: 2rem;
  }

  @media (max-width:400px) {
    left: 15%;
    bottom:3rem;
  }
 
`;

const Titulo = styled.h2`
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;

  }

  @media (max-width: 400px) {
    font-size: 0.9rem;

  }
`;

const Subtitulo = styled.p`
  font-size: 1.25rem;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Indicadores = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Indicador = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.$ativo ? "#fff" : "transparent")};
  border: 1px solid #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 1200px) {
    width: 10px;
    height: 10px;
  }
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
  }
`;

export {
  CarrosselConteiner,
  Slide,
  Setas,
  BotaoSeta,
  ImagemBanner,
  ConteudoTexto,
  Titulo,
  Subtitulo,
  Indicador,
  Indicadores,
};
