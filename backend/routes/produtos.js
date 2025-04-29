import { Router } from 'express';
import { readFile } from 'fs/promises';
import { join } from 'path';
/* global process */
const router = Router();

// GET /produtos — retorna todos os produtos
router.get('/', async (req, res) => {
  try {
    const dataPath = join(process.cwd(), 'backend', 'data', 'todosProdutos.json');
    const file = await readFile(dataPath, 'utf-8');
    const produtos = JSON.parse(file);
    res.json(produtos);
  } catch (erro) {
    console.error('Erro ao ler produtos:', erro);
    res.status(500).json({ mensagem: 'Erro ao carregar produtos.' });
  }
});

export default router;
