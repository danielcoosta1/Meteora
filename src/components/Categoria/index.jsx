import categorias from "../../mocks/categorias.json";
import {
  SecaoCategorias,
  Titulo,
  GridCategorias,
  CardCategoria,
  ImagemCategoria,
  Descricao,
} from "./styles";

import { useCarrinho } from "../../hooks/useCarrinho";

const Categorias = () => {
  const {setCategoriaSelecionada} = useCarrinho();
  return (
    <SecaoCategorias>
      <Titulo>Busque por categoria:</Titulo>
      <GridCategorias>
        {categorias.map((item) => (
          <CardCategoria key={item.id} onClick={() => setCategoriaSelecionada(item.descricao.toLowerCase())}>
            <ImagemCategoria src={item.src} alt={item.alt} />

            <Descricao>{item.descricao}</Descricao>
          </CardCategoria>
        ))}
      </GridCategorias>
    </SecaoCategorias>
  );
};

export default Categorias;
