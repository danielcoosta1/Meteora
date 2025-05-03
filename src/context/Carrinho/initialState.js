// src/context/carrinho/initialState.js
import { localStorageService } from "../../services/localStorageService";

const carrinhoLocal =
  typeof window !== "undefined"
    ? localStorageService.ler("carrinho") || []
    : [];

export const initialState = {
  carrinho: carrinhoLocal,
  menuAberto: false,
};