import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes';
import proveedoresRoutes from './routes/proveedores.routes';
const app = express() 

// setting
//let port;

app.set('port', process.env.APP_PORT);// 3000 is the default port
app.use(clientesRoutes);
app.use(proveedoresRoutes);

export default app
