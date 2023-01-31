import sql from 'mssql';


const dbsetting = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    
    options: {
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        },
        encrypt: false,
        enableArithAbort: false
    },
};


export async function getConnection(){
    try {
        const pool = await sql.connect(dbsetting);
        return pool;
    } catch (error) {
        console.log(`Error estableciendo conexion con la base de datos:\n${error}`);
    }
}


