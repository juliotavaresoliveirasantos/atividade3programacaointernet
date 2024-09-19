import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'database',
    password: 'database1',
    database: 'sistema_venda_ingressos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default async function conectar() {
    return pool.getConnection();
}
