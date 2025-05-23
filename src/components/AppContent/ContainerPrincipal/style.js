import styled from "styled-components";

export const Container = styled.main`
  padding-top: ${(props) => props.$alturaNavbar}px;
  transition: padding-top 0.3s ease;
`;
