import {getConnection} from '../database/connection'


const ordenesController = {}
ordenesController.getOrdenesProveedorTodas = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query("SELECT  ctrl as OC, fecha, moneda, importe, "+
    "case when cerrada = 1 then 'Cerrada' else 'Abierta' end as estado "+
    "  FROM p_ordcompra where provedor = " + req.body.provedor + 
    "  order by 5 , 1  ");
    res.json(result.recordset)
};




ordenesController.getOrdenesProveedorAbiertas = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query("SELECT  ctrl as OC, fecha, moneda, importe, "+
    "case when cerrada = 1 then 'Cerrada' else 'Abierta' end as estado "+
    "  FROM p_ordcompra where provedor = " + req.body.provedor + 
    " and  cerrada is null"+
    "  order by 5 , 1  ");
    res.json(result.recordset)
};

ordenesController.getOrdenesProveedorCerradas = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query("SELECT  ctrl as OC, fecha, moneda, importe, "+
    "case when cerrada = 1 then 'Cerrada' else 'Abierta' end as estado "+
    "  FROM p_ordcompra where provedor = " + req.body.provedor + 
    " and cerrada = 1"+
    "  order by 5 , 1  ");
    res.json(result.recordset)
};

ordenesController.getOrdenesProveedor = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query('SELECT  * FROM m_provedores');
    res.json(result.recordset)
};


module.exports = ordenesController 
