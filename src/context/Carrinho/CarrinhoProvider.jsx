import { useReducer, useEffect, useMemo, useRef } from "react";
import { isEqual } from "lodash";
import { CarrinhoContext } from "./CarrinhoContext";
import { carrinhoReducer } from "./carrinhoReducer";
import { initialState } from "./initialState";
import { useAuth } from "../../hooks/useAuth";
import { CarrinhoService } from "./CarrinhoService";
import { localStorageService } from "../../services/localStorageService";

export const CarrinhoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carrinhoReducer, initialState);
  const ultimaVersaoSalva = useRef();
  const jaMesclouCarrinho = useRef(false); // Referência para controlar mesclagem
  const { usuario } = useAuth();

  // Carregar carrinho do localStorage se não houver usuário logado
  useEffect(() => {
    if (!usuario?.id) {
      const carrinhoLocal = localStorageService.ler("carrinho") || [];
      dispatch({ type: "CARREGAR_CARRINHO", payload: carrinhoLocal });
      ultimaVersaoSalva.current = carrinhoLocal;
    }
  }, [usuario]);

  // Carregar carrinho do backend e mesclar se necessário
  useEffect(() => {
    if (usuario?.id) {
      // Carregar o carrinho do backend e mesclar com o localStorage
      const carregarCarrinhoComMesclagem = async () => {
        try {
          // Primeiro, carregar o carrinho salvo no backend
          const carrinhoBackend = await CarrinhoService.buscarCarrinho(
            usuario.id
          );

          // Se houver carrinho no localStorage, mescle com o carrinho do backend
          const carrinhoLocal = localStorageService.ler("carrinho") || [];

          // Mesclando o carrinho do localStorage com o do backend
          const carrinhoFinal = [...carrinhoBackend];

          carrinhoLocal.forEach((produtoLocal) => {
            const index = carrinhoFinal.findIndex(
              (p) => p.id === produtoLocal.id
            );
            if (index > -1) {
              carrinhoFinal[index].quantidade += produtoLocal.quantidade;
            } else {
              carrinhoFinal.push(produtoLocal);
            }
          });

          // Atualiza o estado com o carrinho mesclado
          dispatch({ type: "CARREGAR_CARRINHO", payload: carrinhoFinal });
          ultimaVersaoSalva.current = carrinhoFinal;

          // Limpa o localStorage para evitar dados duplicados
          localStorageService.remover("carrinho");
        } catch (error) {
          console.error("Erro ao carregar o carrinho do backend:", error);
        }
      };

      carregarCarrinhoComMesclagem();
    } else {
      // Se o usuário não estiver logado, carregar o carrinho local
      const carrinhoLocal = localStorageService.ler("carrinho") || [];
      dispatch({ type: "CARREGAR_CARRINHO", payload: carrinhoLocal });
      ultimaVersaoSalva.current = carrinhoLocal;
    }
  }, [usuario]); // Depende apenas do 'usuario', ou seja, quando o login for feito
  // Dependendo apenas do 'usuario'

  // Atualiza quando o usuário ou carrinho local muda

  useEffect(() => {
    const salvarCarrinho = async () => {
      if (usuario?.id) {
        // Salvar no backend se estiver logado
        if (!isEqual(ultimaVersaoSalva.current, state.carrinho)) {
          try {
            await CarrinhoService.salvarCarrinho(usuario.id, state.carrinho);
            ultimaVersaoSalva.current = state.carrinho;
          } catch (error) {
            console.error("Erro ao salvar carrinho no backend:", error);
          }
        }
      } else {
        // Salvar no localStorage se não estiver logado
        if (!isEqual(ultimaVersaoSalva.current, state.carrinho)) {
          localStorageService.salvar("carrinho", state.carrinho);
          ultimaVersaoSalva.current = state.carrinho;
        }
      }
    };

    salvarCarrinho();
  }, [state.carrinho, usuario]); // Sincroniza quando houver mudanças significativas

  // Ações
  const adicionarAoCarrinho = (produto) => {
    dispatch({ type: "ADICIONAR_PRODUTO", payload: produto });
  };

  const aumentarQuantidade = (id) => {
    dispatch({ type: "AUMENTAR_QUANTIDADE", payload: id });
  };

  const diminuirQuantidade = (id) => {
    dispatch({ type: "DIMINUIR_QUANTIDADE", payload: id });
  };

  const removerItem = (id) => {
    dispatch({ type: "REMOVER_ITEM", payload: id });
  };

  const limparCarrinho = () => {
    if (state.carrinho.length === 0) {
      alert("O carrinho já está vazio!");
      return;
    }
    const confirmar = window.confirm("Deseja limpar o carrinho?");
    if (confirmar) {
      dispatch({ type: "LIMPAR_CARRINHO" });
      if (!usuario?.id) {
        localStorageService.remover("carrinho");
      }
    }
  };

  const abrirMenu = () => {
    dispatch({ type: "TOGGLAR_MENU" });
  };

  const fecharMenu = () => {
    dispatch({ type: "TOGGLAR_MENU" });
  };

  const finalizarCompra = () => {
    if (state.carrinho.length === 0) {
      alert("Seu carrinho está vazio! Adicione produtos antes de finalizar.");
      return;
    }
    alert("Compra finalizada com sucesso! 🎉");
    dispatch({ type: "FINALIZAR_COMPRA" });

    if (usuario?.id) {
      CarrinhoService.salvarCarrinho(usuario.id, []);
      ultimaVersaoSalva.current = [];
    } else {
      localStorageService.remover("carrinho");
    }
  };

  // Total
  const { totalPreco, totalQuantidade } = useMemo(() => {
    const resultado = state.carrinho.reduce(
      (acc, item) => {
        acc.totalQuantidade += item.quantidade;
        acc.totalPreco += item.preco * item.quantidade;
        return acc;
      },
      { totalQuantidade: 0, totalPreco: 0 }
    );
    return resultado;
  }, [state.carrinho]);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho: state.carrinho,
        menuAberto: state.menuAberto,
        totalPreco,
        totalQuantidade,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerItem,
        limparCarrinho,
        abrirMenu,
        fecharMenu,
        finalizarCompra,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
