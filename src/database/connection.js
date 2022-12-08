import sql from 'mssql';


const dbsetting = {
    user : 'sa',
    password:'qlftA',
    server:'localhost',
    database: 'gym',
    options: {
        trustServerCertificate: true,
        encrypt: true,
      },
};


export async function getConnection(){
    try {
        const pool = await sql.connect(dbsetting);
        return pool;
    } catch (error) {
        console.log(error);
        
    }
}


