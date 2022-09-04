import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Lau.13579',
    port: 3306,
    database: 'usersem'
})

export { pool };