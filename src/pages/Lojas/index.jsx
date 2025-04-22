import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import VoltarHome from "../../components/VoltarHome";
import { ContainerMain } from "./styles";

const Lojas = () => {
  return (
    <>
      <BarraDeNavegacao />
      <ContainerMain>
        <h2>Página de Lojas</h2>
        <p>Conteúdo em construção...</p>
        <p>Para voltar à página inicial, clique no botão abaixo</p>
        <VoltarHome>Voltar</VoltarHome>
      </ContainerMain>
    </>
  );
};

export default Lojas;
