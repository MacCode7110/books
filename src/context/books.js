import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        }
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

// We always need a named export for the Provider component
export { Provider };
// We always need a default export for the Context object
export default BooksContext;