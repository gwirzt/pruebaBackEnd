import {getConnection} from '../database/connection'

const clientesController = {}

clientesController.getClientes = async(req,res)=>{
    const pool = await getConnection();
    const result = await pool.request().query('SELECT 1 AS Prueba');
    res.json('Clientes  !!!!!!!')
}

module.exports = clientesController 
