import { ContainerTitulo, LinhaDecorativa, TituloEstilizado } from "./styles";

const TituloSecao = ({ texto = "Título da seção", Icone }) => {
  return (
    <ContainerTitulo>
      <TituloEstilizado>
        <h2>{texto}</h2>
        <p>{Icone && <Icone />}</p>
      </TituloEstilizado>
      <LinhaDecorativa />
    </ContainerTitulo>
  );
};

export default TituloSecao;
