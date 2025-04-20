import styled from "styled-components";

export const ButtonEstilizado = styled.button`
  padding: ${(props) => props.$padding || "0.75rem 1.5rem"};
  font-size: ${(props) => props.$fontSize || "1rem"};
  width: ${(props) => props.$width || "auto"};
  background-color: #9353ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #7e3ce3;
  }
`;