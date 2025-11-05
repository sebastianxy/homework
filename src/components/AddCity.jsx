
import React, { useState } from "react";

export default function AddCity({ onAddCity }) {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddCity(name.trim());
    setName("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 8 }}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nombre ciudad"
      />
      <button type="submit">Agregar Ciudad</button>
    </form>
  );
}
