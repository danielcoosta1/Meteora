// src/pages/Checkout.jsx
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const carrinho = location.state?.carrinho || [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Resumo da compra</h1>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {carrinho.map((item) => (
            <li key={item.id}>
              <p><strong>{item.titulo}</strong></p>
              <p>Quantidade: {item.quantidade}</p>
              <p>Preço total: R$ {(item.quantidade * item.preco).toFixed(2)}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Checkout;
