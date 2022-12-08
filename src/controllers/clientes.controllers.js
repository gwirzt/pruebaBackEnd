import getConnection from '../database/connection'

export const getClientes = async (req, res) => {
    console.log('getClientes');
    const pool = await getConnection();
    const result = await pool.request().query('SELECT top 1 * FROM m_Clientes');
    console.log(result);
    res.json('Clientes  !!!!!!!')
};
