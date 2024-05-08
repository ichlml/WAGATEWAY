const mysql = require ('mysql2/promise')
const createConnection= async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user:' root',
        password: '',
        database: 'sik'
    });
    const balasan = async (keyword) => {
        const connection = await createConnection();
        const [row] = await connection.execute('select message from wa_reply where keyword= ?', [keyword]);
        if (rows.length > 0 ) return row[0].message;
        return false;

    } 
module.exports={
    createConnection,
    balasan
}
}