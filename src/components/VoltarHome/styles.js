import styled from "styled-components";

export const ButtonEstilizado = styled.button`
  padding: ${(props) => props.$padding || "0.75rem 1rem"};
  font-size: ${(props) => props.$fontSize || "1rem"};
  min-width: ${(props) => props.$width || "auto"};
  background-color: #9353ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color:transparent;
    color:  #9353ff;
    border: 1px solid  #9353ff;
  }
`;