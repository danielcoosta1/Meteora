import { Router } from 'express';
import prisma from "../lib/prisma.js"; // 👈 ajuste aqui

const router = Router();

router.get('/', async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  } catch (erro) {
    console.error('Erro ao carregar produtos:', erro);
    res.status(500).json({ mensagem: 'Erro ao carregar produtos.' });
  }
});

export default router;
