
import React, { useState } from "react";

export default function AddPerson({ cityOptions = [], onAddPerson }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState(cityOptions[0] || "");

  React.useEffect(() => {
    if (cityOptions.length && !cityOptions.includes(city)) {
      setCity(cityOptions[0]);
    }
  }, [cityOptions]);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !city) return;
    onAddPerson({ name: name.trim(), age: Number(age) || 0, cityName: city });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 8 }}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre persona" />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="Edad" type="number" style={{ width: 80 }} />
      <select value={city} onChange={e => setCity(e.target.value)}>
        {cityOptions.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button type="submit">Agregar Persona</button>
    </form>
  );
}
