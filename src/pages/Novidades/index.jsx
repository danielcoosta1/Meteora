import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import VoltarHome from "../../components/VoltarHome";

const Novidades = () => {
  return (
    <>
      <BarraDeNavegacao />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Página de Novidades</h2>
        <p>Conteúdo em construção...</p>
        <p>Para voltar à página inicial, clique no botão abaixo</p>
        <VoltarHome />
      </main>
    </>
  );
};

export default Novidades;
