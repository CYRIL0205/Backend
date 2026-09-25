import * as bookModel from '../models/bookmodels.js';

export const fetchALLBooks = async () => {
    const books = await bookModel.fetchALLBooks();
    return books;
}