import { Router } from 'express';
import EventoController from '../Controle/eventoCtrl.js'; // Caminho correto para o controlador

const router = Router();

router.post('/', EventoController.criarEvento);
router.get('/', EventoController.listarEventos);
router.get('/:id', EventoController.buscarEventoPorId);
router.put('/:id', EventoController.atualizarEvento);
router.delete('/:id', EventoController.excluirEvento);
router.get('/:id/ingressos', EventoController.buscarEventoComIngressos); // Adiciona a rota para buscar eventos com ingressos

export default router;
