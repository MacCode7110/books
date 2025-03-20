import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

function BookShow({ book }) {
    const { deleteBookById } = useContext(BooksContext);
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
         // The book prop already contains the id of the book object that we need to delete.
        // We can reference the id field of the book passed down through the book prop and pass this id in as an argument to the onDelete function.
        deleteBookById(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit); //Toggle the value of showEdit
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }

    return <div className="book-show">
        <img
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/200`} // Ensure that a random image is generated for every unique URL, which is determined through specifying a unique book id. Use string interpolation to specify the book id.
        />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    </div>;
}

export default BookShow;