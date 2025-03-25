import './index.css';
import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
function App() {
    const { stableFetchBooks } = useContext(BooksContext);
    // Fetch all books from the server only after the fetchBooks piece of state changes.
    useEffect(() => {
        stableFetchBooks();
    }, [stableFetchBooks]);

    return <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>;
}

export default App;