import { toast, Slide } from "react-toastify";

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

// Toast de informação (por exemplo, para favoritos)
export const toastInfo = (mensagem) => {
  toast.info(mensagem, {
    icon: "💖",
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
