import styled from "styled-components";

export const ContainerEstilizado = styled.div`
  max-width: 1400px; /* ou o limite que preferir */
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  justify-content: center;

  @media (max-width: 1200px) {
    padding: 0 1rem;
  }

`;
