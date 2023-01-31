import { Router } from "express";
import {getProveedoresTodos,getProveedoresCuit, getProveedoresNombre} from '../controllers/proveedores.controllers';
import {validarToken} from '../controllers/token.controllers';


const router = Router();

//quisiera que el midleware se aplique a todas las rutas de este archivo

router.route('/proveedorestodos').post(validarToken, getProveedoresTodos);
router.route('/proveedorescuit').post(validarToken, getProveedoresCuit);
router.route('/proveedoresnombre').post(validarToken, getProveedoresNombre);
export default router;
