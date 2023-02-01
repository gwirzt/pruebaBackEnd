import {getConnection} from '../database/connection'


const ordenesController = {}
ordenesController.getOrdenesProveedorTodas = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query("SELECT  a.ctrl as OC, a.fecha, "+
    "case when a.moneda is null then 'P' else a.moneda end as moneda, a.importe, "+
    " case when cerrada = 1 then 'Cerrada' else 'Abierta' end as estado "+
    " FROM p_ordcompra a "+
    " left join m_provedores b on a.provedor = b.ctrl "+
    " where b.cuit = '" + req.body.cuit + "'"+ 
    " order by 5 , 1  ");
    res.json(result.recordset)
};




ordenesController.getOrdenesProveedorAbiertas = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query("SELECT  a.ctrl as OC, a.fecha, "+
    " case when a.moneda is null then 'P' else a.moneda end as moneda, a.importe, "+
    " case when a.cerrada = 1 then 'Cerrada' else 'Abierta' end as estado "+
    " FROM p_ordcompra a "+
    " left join m_provedores b on a.provedor = b.ctrl "+
    " where b.cuit = '" + req.body.cuit + "'"+
    " and  a.cerrada is null"+
    " order by 5 , 1  ");
    res.json(result.recordset)
};

ordenesController.getOrdenesProveedorCerradas = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query("SELECT  a.ctrl as OC, a.fecha, "+
    " case when a.moneda is null then 'P' else a.moneda end as moneda, a.importe, "+
    " case when a.cerrada = 1 then 'Cerrada' else 'Abierta' end as estado "+
    " FROM p_ordcompra a "+
    " left join m_provedores b on a.provedor = b.ctrl "+
    " where b.cuit = '" + req.body.cuit + "'"+
    " and a.cerrada = 1"+
    " order by 5 , 1  ");
    res.json(result.recordset)
};

ordenesController.getOrdenesProveedor = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query('SELECT  * FROM m_provedores');
    res.json(result.recordset)
};


module.exports = ordenesController 
