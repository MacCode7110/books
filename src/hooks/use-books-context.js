import { useContext } from 'react';
import BooksContext from '../context/books';

// This is a custom hook as it turns the useContext(BooksContext) hook into reusable logic.
function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;