import { useState } from "react";
import Stack from "./utils/stack";

const bookStack = new Stack();

function App() {
  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    author: "",
    editorial: ""
  });

  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookStack.push(formData);
    setBooks(bookStack.print());
    setFormData({ name: "", isbn: "", author: "", editorial: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Stack de Libros</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre del libro" required />
        <input name="isbn" value={formData.isbn} onChange={handleChange} placeholder="ISBN" required />
        <input name="author" value={formData.author} onChange={handleChange} placeholder="Autor" required />
        <input name="editorial" value={formData.editorial} onChange={handleChange} placeholder="Editorial" required />
        <button type="submit">Agregar Libro</button>
      </form>

      <h2> Pila de libros</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.name}</strong> - {book.isbn} - {book.author} ({book.editorial})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
