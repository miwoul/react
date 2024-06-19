import React from 'react';
import Book from './Book';

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year:1960 },
    { title: '1984', author: 'George Orwell', year:1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year:1925 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year:1951 }
    ];

    function BookList() {
        return (
          
          <div className='App'>
            {/* {Book.map((book, index) =>(
            <Book key={index} {...book} />
            ))} */}
            <Book {...books[0]}/>
            <Book {...books[1]}/>
            <Book {...books[2]}/>
            <Book {...books[3]}/>
          </div>
        );
      }
      
      
      export default BookList;
      