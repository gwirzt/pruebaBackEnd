import { Router } from "express";
import {getClientes} from '../controllers/clientes.controllers';


const router = Router();
router.route('/clientes').get(getClientes)

router.post('/clientes', (req, res) => {
    // quiero imprimir el body
    console.log(req.body);
    res.send('Clientes  desde el POST!!!!!!!')
    
});

router.delete('/clientes', (req, res) => res.send('Clientes  !!!!!!!'));

router.put('/clientes', (req, res) => res.send('Clientes  !!!!!!!'));




export default router;
