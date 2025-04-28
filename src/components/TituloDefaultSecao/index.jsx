import { ContainerTitulo, LinhaDecorativa, TituloEstilizado } from "./styles";

const TituloSecao = ({ texto = "Título da seção", Icone }) => {
  return (
    <ContainerTitulo>
      <TituloEstilizado>
        <span>{texto}</span>
        <p>{Icone && <Icone />}</p>
      </TituloEstilizado>
      <LinhaDecorativa />
    </ContainerTitulo>
  );
};

export default TituloSecao;
