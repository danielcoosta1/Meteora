import { FaHeart } from "react-icons/fa";
import { LiaHeartBrokenSolid } from "react-icons/lia";
import { toast, Slide } from "react-toastify";
import React from "react";
// Toast de sucesso
export const toastSucesso = (mensagem) => {
  toast.success(mensagem, {
    icon: "✅",
    transition: Slide,
    style: {
      background: "#4BB543", // verde
      color: "#fff",
      fontSize: "16px",
    },
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });
};

// Toast de erro
export const toastErro = (mensagem) => {
  toast.error(mensagem, {
    icon: "🚫",
    transition: Slide,
    style: {
      background: "#ff4d4f", // vermelho
      color: "#fff",
      fontSize: "16px",
    },
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });
};

export const toastInfo = (mensagem) => {
  toast.info(mensagem, {
    icon: () =>
      React.createElement(
        "span",
        {
          style: {
            display: "inline-block",
            animation: "heartbeat 0.8s ease-in-out infinite",
            transformOrigin: "center",
          },
        },
        "💖"
      ),
    transition: Slide,
    style: {
      background: "#ffb6c1", // rosa claro
      color: "#333",
      fontSize: "16px",
    },
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });
};

// Toast de remoção de favorito
export const toastRemocaoFavorito = (mensagem) => {
  toast(mensagem, {
    icon: () => <LiaHeartBrokenSolid color="#999" />, // cinza ou escuro
    transition: Slide,
    style: {
      background: "#f0f0f0", // neutro
      color: "#333",
      fontSize: "16px",
    },
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });
};
