import { useState } from "react";
import Queue from "./utils/queue";

const ATMline = new Queue();

function App() {
  const [formData, setFormData] = useState({
    name: "",
    monto: "",
    hora: ""
  });

  const [Lines, setLines] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ATMline.enqueue(formData);
    setLines(ATMline.print());
    setFormData({ name: "", monto: "", hora: ""});
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1> Fila cajero ATM</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre del usuario" required />
        <input name="monto" value={formData.monto} onChange={handleChange} placeholder="monto de dinero a retirar" required />
        <input name="hora" value={formData.hora} onChange={handleChange} placeholder="hora de llegada" required />
        <button type="submit">Agregar persona a la fila</button>
      </form>

      <h2> Fila de personas</h2>
      <ul>
        {Lines.map((line, index) => (
          <li key={index}>
            <strong>{line.name}</strong> - {line.monto} - {"Hora de llegada"} {line.hora}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;