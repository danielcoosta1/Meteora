import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import VoltarHome from "../../components/VoltarHome";

const Promocoes = () => {
  return (
    <>
      <BarraDeNavegacao />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Página de Promoções</h2>
        <p>Conteúdo em construção...</p>
        <p>Para voltar à página inicial, clique no botão abaixo</p>
        <VoltarHome>Voltar</VoltarHome>
      </main>
    </>
  );
};

export default Promocoes;
