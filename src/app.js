import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes';
import proveedoresRoutes from './routes/proveedores.routes';
import tokenRoutes from './routes/token.routes';
import ordensRoutes from './routes/ordenes.routes';
const app = express() ;
// cross origin
const cors = require('cors');
const morgan = require('morgan');


// setting
//let port;
app.use(express.json());
app.set('trust proxy', true);
app.use(morgan('tiny'));

app.set('port', process.env.APP_PORT);// 3000 is the default port

const corsOptions = {
    origin: '*',
    methods: ['GET,PATCH,POST'],
    Credentials: true,
}
app.use(cors(corsOptions));
app.use(clientesRoutes);
app.use(proveedoresRoutes);
app.use(ordensRoutes);
app.use(tokenRoutes);

export default app
