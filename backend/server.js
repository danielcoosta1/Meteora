import express from "express";
import cors from "cors";
import prisma from "./lib/prisma.js"; // 👈 ajuste aqui

import produtosRoutes from "./routes/produtos.js";
import carrinhoRoutes from "./routes/carrinho.js";
import usuariosRoutes from "./routes/usuarios.js";
/* global process */
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Verifica a conexão com o banco de dados
prisma.$connect()
  .then(() => console.log('Conexão com o banco de dados estabelecida.'))
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
    process.exit(1);
  });

// Roteamento
app.use('/produtos', produtosRoutes);
app.use('/carrinho', carrinhoRoutes);
app.use('/usuarios', usuariosRoutes);

app.get("/", (req, res) => {
  res.send("Backend Meteora rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
