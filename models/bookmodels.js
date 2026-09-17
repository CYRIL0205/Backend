import pool from '../config/db.js';

export const fetchALLBooks = async () => {
    const [rows] = await pool.query('SELECT * FROM book');
    return rows;
}