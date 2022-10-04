import React from "react";

const NewBookForm = ({ onNewBook = (f) => f }) => {
  let _title, _author, _genre;
  const submit = (e) => {
    e.preventDefault();
    onNewBook(_title.value, _author.value, _genre.value);
    _title.value = "";
    _author.value = "";
    _genre.value = "";
    _title.focus();
  };

  return (
    <form className="edit-form" autocomplete="off" onSubmit={submit}>
      <input
        ref={(input) => (_title = input)}
        type="text"
        placeholder="Title"
        required
      />
      <input
        ref={(input) => (_author = input)}
        type="text"
        placeholder="Author"
        required
      />
      <input
        ref={(input) => (_genre = input)}
        type="text"
        placeholder="Genre"
        required
      />
      <button>Add Book</button>
    </form>
  );
};
export default NewBookForm;