import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import VoltarHome from "../../components/VoltarHome";
import { ContainerMain } from "../Lojas/styles";

const Promocoes = () => {
  return (
    <>
      <BarraDeNavegacao />
      <ContainerMain>
        <h2>Página de Promoções</h2>
        <p>Conteúdo em construção...</p>
        <p>Para voltar à página inicial, clique no botão abaixo</p>
        <VoltarHome>Voltar</VoltarHome>
      </ContainerMain>
    </>
  );
};

export default Promocoes;
