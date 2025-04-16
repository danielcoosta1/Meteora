import categorias from "../../mocks/categorias.json";
import {
  SecaoCategorias,
  Titulo,
  GridCategorias,
  CardCategoria,
  ImagemCategoria,
  Descricao
} from "./styles";

const Categorias = () => {
  return (
    <SecaoCategorias>
      <Titulo>Busque por categoria:</Titulo>
      <GridCategorias>
        {categorias.map((item) => (
          <CardCategoria key={item.id}>
            <ImagemCategoria src={item.src} alt={item.alt} />
            <Descricao>{item.descricao}</Descricao>
          </CardCategoria>
        ))}
      </GridCategorias>
    </SecaoCategorias>
  );
};

export default Categorias;
