import * as bookModel from '../models/bookmodels.js';

export const fetchALLBooks = async () => {
    const books = await bookModel.fetchALLBooks();
    return books;
}

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}

export const updateBook = async (book) => {
    const updatedBook = await bookModel.update(book);
    return updatedBook;
}

export const deleteBook = async (id) => {
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}