import {getConnection} from '../database/connection'

const clientesController = {}

clientesController.getClientes = async(req,res)=>{
    console.log('getClientes');
    const pool = await getConnection();
    const result = await pool.request().query('SELECT 1 AS Prueba');
    console.log(result);
    res.json('Clientes  !!!!!!!')
}

module.exports = clientesController 