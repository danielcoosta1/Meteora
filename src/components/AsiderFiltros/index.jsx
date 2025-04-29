import {
  AsideEstilizado,
  ItemListaEstilizado,
  ListaEstilizada,
  ListaDeFiltros,
  TituloAside,
  TituloFiltro,
} from "./styles";
import { CiFilter } from "react-icons/ci";

import { useProdutos } from "../../hooks/useProdutos";

import { IoMdArrowDropright } from "react-icons/io";

const AsiderFiltros = () => {
  const { setFiltroPreco, filtroPreco, setGeneroSelecionado, generoSelecionado } = useProdutos();

  return (
    <>
      <AsideEstilizado>
        <TituloAside>
          <h2>Filtros</h2>
          <CiFilter size={35} />
        </TituloAside>
        <ListaEstilizada>
          <ItemListaEstilizado>
            <TituloFiltro>
              <IoMdArrowDropright size={20} />
              Preços
            </TituloFiltro>
            <ListaDeFiltros>
              <li
                onClick={() => setFiltroPreco("ate100")}
                className={filtroPreco === "ate100" ? "ativo" : ""}
              >
                <button type="button">Até R$100</button>
              </li>
              <li
                onClick={() => setFiltroPreco("100a200")}
                className={filtroPreco === "100a200" ? "ativo" : ""}
              >
                <button type="button">R$100 a R$200</button>
              </li>
              <li
                onClick={() => setFiltroPreco("acima200")}
                className={filtroPreco === "acima200" ? "ativo" : ""}
              >
                <button type="button">Acima de R$200</button>
              </li>
            </ListaDeFiltros>
          </ItemListaEstilizado>
          <ItemListaEstilizado>
            <TituloFiltro>
            <IoMdArrowDropright size={20} />
            Gêneros
            </TituloFiltro>
            <ListaDeFiltros>
              <li
                onClick={() => setGeneroSelecionado("masculino")}
                className={generoSelecionado === "masculino" ? "ativo" : ""}
              >
                <button type="button">Masculino</button>
              </li>
              <li
                onClick={() => setGeneroSelecionado("feminino")}
                className={generoSelecionado === "feminino" ? "ativo" : ""}
              >
                <button type="button">Feminino</button>
              </li>
              <li
                onClick={() => setGeneroSelecionado("unissex")}
                className={generoSelecionado === "unissex" ? "ativo" : ""}
              >
                <button type="button">Unissex</button>
              </li>
            </ListaDeFiltros>
          </ItemListaEstilizado>
        </ListaEstilizada>
      </AsideEstilizado>
    </>
  );
};

export default AsiderFiltros;
