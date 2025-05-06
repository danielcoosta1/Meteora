import express from "express";
import cors from "cors";
import prisma from "./lib/prisma.js"; // 👈 ajuste aqui

import produtosRoutes from "./routes/produtos.js";
import carrinhoRoutes from "./routes/carrinho.js";
import cadastroRoutes from "./routes/cadastro.js"; // Importando a rota de cadastro
import loginRoutes from "./routes/login.js"; // Importando a rota de login
import favoritosRouter from "./routes/favoritos.js"

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
app.use('/favoritos', favoritosRouter);
app.use('/usuarios/cadastro', cadastroRoutes); // Usando a rota de cadastro
app.use('/usuarios/login', loginRoutes); // Usando a rota de login


app.get("/", (req, res) => {
  res.send("Backend Meteora rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
