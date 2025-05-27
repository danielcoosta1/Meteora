import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  // Aumentado de 90% para 95%
  height: 90vh; // Aumentado de 90% para 95%
  width: 30vw; // Largura mínima aumentada
  // Altura mínima aumentada
  background: #ffffff;
  padding: 2rem; // Aumentado de 2rem para 3rem
  border-radius: 20px; // Borda mais arredondada
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: scaleUp 0.3s ease;

  @keyframes scaleUp {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }

  img {
    width: 100%;
    max-height: 80vh; // Aumentado de 70vh para 80vh
    min-height: 500px; // Altura mínima da imagem
    object-fit: contain;
    border-radius: 15px;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

@media (max-width: 768px) {
  width: 90vw; // Largura reduzida para telas menores
  height: 95vh; // Altura reduzida para telas menores
  padding: 1.5rem; // Reduzido o padding para telas menores
  }
@media (max-width: 480px) {
  width: 95vw; // Largura ainda mais reduzida para telas muito pequenas
  height: 95vh; // Altura mantida para telas muito pequenas
  padding: 1rem; // Padding ainda mais reduzido
}


`;

export const ModalClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export const TituloProduto = styled.h3`
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
`;

export const DescricaoProduto = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

export const PrecoProduto = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const ConteinerBotoes = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const BotaoCarrinho = styled.button`
  background-color: #9353ff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const IconesWrapper = styled.button`
  background: transparent;

  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$favoritado ? "#FF4081" : " #9353ff")};
  transition: all 0.3s ease;

  &:hover {
    background: #e0d4ff; // Um roxinho claro no hover
    color: #5e2ca5; // Roxo mais escuro pro ícone em hover
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
