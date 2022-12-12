import {getConnection} from '../database/connection'

export const getProveedores = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query('SELECT top 100  * FROM m_provedores');
    console.log(result);
    res.json('Provedores  !!!!!!!')
};
