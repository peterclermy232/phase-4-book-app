import React from "react";

const Book = ({ book, onRemoveBook = (f) => f, editingBook = (f) => f }) => (
  <div className="single-book" key={book.id}>
    <h4>{book.title}</h4>
    <p>{book.author}</p>
    <p>{book.genre}</p>
    <button onClick={() => onRemoveBook(book.id)}>Delete</button>
    <button onClick={() => editingBook(book.id)}>Edit</button>
  </div>
);

export default Book;