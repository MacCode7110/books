import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => {
        return (<BookShow key={book.id} book={book}/>);
    });

    // NOTE: We can include multiple different variables with each one surrounded by curly brackets in the JSX that is rendered
    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;