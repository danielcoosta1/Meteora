import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// GET /produtos — retorna todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany(); // Buscando no banco de dados
    res.json(produtos);
  } catch (erro) {
    console.error('Erro ao carregar produtos:', erro);
    res.status(500).json({ mensagem: 'Erro ao carregar produtos.' });
  }
});

export default router;
