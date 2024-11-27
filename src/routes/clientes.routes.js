import { Router } from "express";
import {getClientes} from '../controllers/clientes.controllers';


const router = Router();

router.route('/clientes').post(getClientes)

router.post('/clientes', (req, res) => {
    // quiero imprimir el body
    console.log(req.body);
    res.send('Clientes  desde el POST!!!!!!!')
});

router.delete('/clientes', (req, res) => res.send('Clientes  desde DELETE!!!!!!!'));

router.put('/clientes', (req, res) => res.send('Clientes  desde PUT!!!!!!!'));




export default router;
