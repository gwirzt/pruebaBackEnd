import { Router } from "express";
import {validarToken} from '../controllers/token.controllers';
import { getOrdenesProveedorTodas, getOrdenesProveedorAbiertas,getOrdenesProveedorCerradas,getOrdenesProveedor } from '../controllers/ordenes.controllers';

// 
const router = Router();


// router.route('/ordenesprovedor').get(validarToken, getOrdenesProveedorTodas);
// router.route('/ordenesprovedorabiertas').get(validarToken, getOrdenesProveedorAbiertas);
// router.route('/ordenesprovedorcerradas').get(validarToken, getOrdenesProveedorCerradas);

router.route('/ordenesprovedor').post(validarToken, getOrdenesProveedorTodas);
router.route('/ordenesprovedorabiertas').post(validarToken, getOrdenesProveedorAbiertas);
router.route('/ordenesprovedorcerradas').post(validarToken, getOrdenesProveedorCerradas);
export default router;

