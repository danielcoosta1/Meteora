import {
  AsideEstilizado,
  ItemListaEstilizado,
  ListaEstilizada,
  ListaPrecos,
  TituloAside,
  TituloPrecos,
} from "./styles";
import { CiFilter } from "react-icons/ci";

import { useProdutos } from "../../hooks/useProdutos";

import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";

const AsiderFiltros = () => {
  const { setFiltroPreco, filtroPreco } = useProdutos();

  const [abrirListaPrecos, setAbrirListaPrecos] = useState(false);

  return (
    <>
      <AsideEstilizado>
        <TituloAside>
          <h2>Filtros</h2>
          <CiFilter size={35} />
        </TituloAside>
        <ListaEstilizada>
          <ItemListaEstilizado>
            <TituloPrecos onClick={() => setAbrirListaPrecos(!abrirListaPrecos)}>
              <IoMdArrowDropright size={20} />
              Preços
            </TituloPrecos>
            <ListaPrecos $aberto={abrirListaPrecos}>
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
            </ListaPrecos>
          </ItemListaEstilizado>
        </ListaEstilizada>
      </AsideEstilizado>
    </>
  );
};

export default AsiderFiltros;
