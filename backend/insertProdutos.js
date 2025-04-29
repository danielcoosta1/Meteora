import { PrismaClient } from "@prisma/client";
import { readFile } from "fs/promises";
import { join } from "path";

/* global process */
const prisma = new PrismaClient();

async function insertProdutos() {
  try {
    // Caminho para o arquivo todosProdutos.json
    const dataPath = join(process.cwd(), "data", "todosProdutos.json"); // Corrigido aqui
    const file = await readFile(dataPath, "utf-8");
    const produtos = JSON.parse(file); // Converte o conteúdo JSON para um array de objetos

    // Inserir os produtos no banco de dados
    for (let produto of produtos) {
      await prisma.produto.create({
        data: {
          categoria: produto.categoria,
          src: produto.src,
          alt: produto.alt,
          titulo: produto.titulo,
          descricao: produto.descricao,
          preco: parseFloat(produto.preco), // Certificando-se de que é um número de ponto flutuante
          cores: produto.cores, // Verificando se é um array de strings
          tamanhos: produto.tamanhos, // Verificando se é um array de strings
          material: produto.material,
          genero: produto.genero,
        },
      });
    }

    console.log("Produtos inseridos com sucesso!");
  } catch (erro) {
    console.error("Erro ao inserir produtos:", erro);
  } finally {
    await prisma.$disconnect(); // Desconecta do Prisma
  }
}

insertProdutos();
