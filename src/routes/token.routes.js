import { Router } from "express";
import {getToken} from '../controllers/token.Controllers';



const router = Router();


router.get('/token', getToken);

export default router;
