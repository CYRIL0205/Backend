import * as bookService from '../services/bookServices.js';

export const fetchALLBooks = async (req, res) => {
    const books = await bookService.fetchALLBooks();
    res.status(200).json(books);
}

export const createBook = async (req, res) => {
    const {name, author} = req.body;
    const book = {name, author};

    try {
        const bookId = await bookService.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
           error: "Internet Server Error"
        });
    }
        
}