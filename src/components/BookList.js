import { useContext } from 'react';
import BooksContext from '../context/books'
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
    // Use object destructuring to access count and incrementCount
    const { count, incrementCount } = useContext(BooksContext);
    const renderedBooks = books.map((book) => {
        return (<BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>);
    });

    // NOTE: We can include multiple different variables with each one surrounded by curly brackets in the JSX that is rendered
    return <div className="book-list">
        {count}
        <button onClick={incrementCount}>Click</button>
        {renderedBooks}</div>;
}

export default BookList;