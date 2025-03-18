import { useState } from 'react';
function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        //After a title is submitted and created, set the title piece of state to an empty string so that this component rerenders and displays an empty string for the value attribute of the input element.
        setTitle('');
    }
    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange}/>
            <button>Create!</button>
        </form>
    </div>;
}

export default BookCreate;