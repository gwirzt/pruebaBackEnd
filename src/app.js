import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes';
const app = express() 

// setting
//let port;

app.set('port', config.port || 3001);// 3000 is the default port
app.use(clientesRoutes);

export default app
