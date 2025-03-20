import { useContext } from 'react';
import BooksContext from '../context/books'
import BookShow from './BookShow';

function BookList() {
    const { books } = useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return (<BookShow key={book.id} book={book}/>);
    });

    // NOTE: We can include multiple different variables with each one surrounded by curly brackets in the JSX that is rendered
    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;