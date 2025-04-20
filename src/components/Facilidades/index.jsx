import {
  ConteinerConteudo,
  ConteinerDescricao,
  ConteinerPrincipal,
  Img,
  ItemFacilidade,
  ListaFacilidades,
} from "./styles";
import facilidades from "../../mocks/facilidades.json";

const Facilidades = () => {
  return (
    <ConteinerPrincipal>
      <h1>Conheça todas as nossas facilidades</h1>
      <ConteinerConteudo>
        <ListaFacilidades>
          {facilidades.map((facilidade) => (
            <ItemFacilidade key={facilidade.id}>
              <Img src={facilidade.src} />
              <ConteinerDescricao>
                <h2>{facilidade.titulo}</h2>
                <p>{facilidade.descricao}</p>
              </ConteinerDescricao>
            </ItemFacilidade>
          ))}
        </ListaFacilidades>
      </ConteinerConteudo>
    </ConteinerPrincipal>
  );
};

export default Facilidades;
