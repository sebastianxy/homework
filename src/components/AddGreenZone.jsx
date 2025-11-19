import React, { useState } from "react";

export default function AddGreenZone({ city, onAddZone }) {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddZone(name.trim());
    setName("");
  };

  return (
    <form onSubmit={submit}>
      <h4>Zonas Verdes para: {city}</h4>

      <input
        placeholder="Nombre de zona verde"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button type="submit">Añadir zona verde</button>
    </form>
  );
}