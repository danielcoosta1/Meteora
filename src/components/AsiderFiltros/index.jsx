import {
  AsideEstilizado,
  ItemListaEstilizado,
  ListaEstilizada,
  ListaPrecos,
  TituloAside,
} from "./styles";
import { CiFilter } from "react-icons/ci";

import { useProdutos } from "../../hooks/useProdutos";

import { IoMdArrowDropright } from "react-icons/io";

const AsiderFiltros = () => {
  const { setFiltroPreco } = useProdutos();

  return (
    <>
      <AsideEstilizado>
        <TituloAside>
          <h2>Filtros</h2>
          <CiFilter size={35} />
        </TituloAside>
        <ListaEstilizada>
          <ItemListaEstilizado>
            <h2>
              <IoMdArrowDropright size={20} />
              Preços
            </h2>
            <ListaPrecos>
              <li>
                <button type="button" onClick={() => setFiltroPreco("ate100")}>
                  Até R$100
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setFiltroPreco("100a200")}>
                  R$100 a R$200
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setFiltroPreco("acima200")}
                >
                  Acima de R$200
                </button>
              </li>
            </ListaPrecos>
          </ItemListaEstilizado>
        </ListaEstilizada>
      </AsideEstilizado>
    </>
  );
};

export default AsiderFiltros;
