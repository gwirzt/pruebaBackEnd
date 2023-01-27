import {getConnection} from '../database/connection'


const proveedoresController = {}
proveedoresController.getProveedoresTodos = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query('SELECT  * FROM m_provedores');
    res.json(result.recordset)
};

proveedoresController.getProveedoresCuit = async (req, res) => {
   
    let sql = "SELECT  * FROM m_provedores where cuit = '" + req.body.cuit + "'";
    const pool = await getConnection();
    const result = await pool.request().query(sql );
    res.json(result.recordset)
};


//buscarproveedors por nmbre con like

proveedoresController.getProveedoresNombre = async (req, res) => {
   console.log(req.body.nombre);
    let sql = "SELECT  * FROM m_provedores where upper(nombre) like upper('%" + req.body.nombre + "%')";
    console.log(sql);
    const pool = await getConnection();
    const result = await pool.request().query(sql );
    res.json(result.recordset)
};


module.exports = proveedoresController 
