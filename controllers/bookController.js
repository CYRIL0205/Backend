import * as bookService from '../services/bookServices.js';

export const fetchALLBooks = async (req, res) => {
    const books = await bookService.fetchALLBooks();
    res.status(200).json(books);
}