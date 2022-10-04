import React, { Component } from "react";

export default class EditBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.book.id,
      title: this.props.book.title,
      author: this.props.book.author,
      genre: this.props.book.genre,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, author, genre } = this.state;
    this.props.editBook(id, title, author, genre);
  }

  render() {
    return (
      <form
        className="edit-form"
        autocomplete="off"
        onSubmit={this.handleSubmit}
      >
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <input
          name="genre"
          type="text"
          placeholder="Genre"
          value={this.state.genre}
          onChange={this.handleChange}
        />
        <button>Update Book</button>
      </form>
    );
  }
}