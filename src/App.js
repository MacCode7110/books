import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        // Response is an array of book objects
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    // Fetch all books from the server on first render of the application
    useEffect(() => {
        fetchBooks();
    }, []);

    // DO NOT DO THIS! Calling fetchBooks outside of a useEffect hook causes the application to infinitely rerender!
    // fetchBooks();

    const editBookById = async (id, newTitle) => {
        // Response is a book object with the specified id and an updated value for the title property
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        console.log(response);

        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                // Spread the properties of the book object with the matching id, spread the properties of response.data, and add all key-value pairs (properties and corresponding values) from response.data into the book object. Return the updated book object from the map function.
                // Specifically, the values of the properties of the book object stored in response.data will override the values of the properties of ...book when added to ...book.
                return {...book, ...response.data};
            }

            return book;
        });

        setBooks(updatedBooks);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        
        // We do not need to access the response inside of this function as the equivalent deletion can be performed on the frontend by comparing the id of each book object in the array of book objects to the id passed into this function as an argument.
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        // BAD CODE! The application will not rerender because the references to the current state and new state respectively point to the same array/object in memory. Under this condition, React assumes that no rerender is required.
        // books.push({ id: 123, title: title});
        // console.log(books);
        // setBooks(books);

        // GOOD CODE
        // IDs need to be unique and are generated by a backend server in industry.

        // Response is a new book object with an id and the specified title
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        console.log(response);
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };
    return <div className="app">
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;