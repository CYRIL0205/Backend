import pool from '../config/db.js';

export const fetchALLBooks = async () => {
    const [rows] = await pool.query('SELECT * FROM books');
    return rows;
}


export const findBookByNameAndAuthor = async (book) => {
    const [rows] = await pool.query("SELECT * FROM books WHERE name = ? AND author = ?",
        [book.name, book.author]
    );
    return rows;
}

export const findBookById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM books WHERE id = ?",
        [id]
    );
    return rows;
}

export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO books(name, author) VALUES (?, ?)", 
        [book.name, book.author]
    );
    return result.insertId;
}

export const update = async (book) => {
    const [result] = await pool.query(
        "UPDATE books SET name = ?, author = ? WHERE id = ?",
        [book.name, book.author, book.id]
    );
    return result.affectedRows;
}

export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM books WHERE id = ?",[id]
    );
    return result.affectedRows;
}

