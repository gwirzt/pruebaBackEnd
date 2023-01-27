import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes';
import proveedoresRoutes from './routes/proveedores.routes';
import tokkenRoutes from './routes/token.routes';
import ordensRoutes from './routes/ordenes.routes';
const app = express() 

// setting
//let port;
app.use(express.json());

app.set('port', process.env.APP_PORT);// 3000 is the default port
app.use(clientesRoutes);
app.use(proveedoresRoutes);
app.use(ordensRoutes);
app.use(tokkenRoutes);

export default app
