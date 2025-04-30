import { localStorageService } from "../../services/localStorageService";

const filtrosSalvos = localStorageService.ler("filtros") || {
  categoriaSelecionada: null,
  termoBusca: "",
  filtroPreco: null,
  generoSelecionado: null,
};

export const initialState = {
  ...filtrosSalvos,
  produtoAmpliado: null,
  produtos: [], // ← novo campo adicionado para armazenar os produtos da API
};
