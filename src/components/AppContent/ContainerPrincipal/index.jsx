
import { Container } from "./style";

const ContainerPrincipal = ({ $alturaNavBar, children }) => {
  return <Container $alturaNavbar={$alturaNavBar}>{children}</Container>;
};

export default ContainerPrincipal;
