import { Router } from "express";
import {getClientes} from '../controllers/clientes.controllers';


const router = Router();
router.get('/clientes',getClientes);

router.post('/clientes', (req, res) => res.send('Clientes  !!!!!!!'));

router.delete('/clientes', (req, res) => res.send('Clientes  !!!!!!!'));

router.put('/clientes', (req, res) => res.send('Clientes  !!!!!!!'));




export default router;
