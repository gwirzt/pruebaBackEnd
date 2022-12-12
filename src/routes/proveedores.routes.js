import { Router } from "express";
import {getProveedores} from '../controllers/proveedores.controllers';


const router = Router();

router.get('/proveedores',getProveedores);

export default router;
