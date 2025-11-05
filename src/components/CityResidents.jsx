
import React from "react";

export default function CityResidents({ cityNames = [], onSelectCity, residents = [], selectedCity }) {
  return (
    <div>
      <h3>Lista por ciudad</h3>
      <select onChange={e => onSelectCity(e.target.value)} value={selectedCity || ""}>
        <option value="">-- seleccionar ciudad --</option>
        {cityNames.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      {selectedCity ? (
        <div style={{ marginTop: 8 }}>
          <h4>Personas en {selectedCity}:</h4>
          {residents.length === 0 ? (
            <p>(ninguna persona)</p>
          ) : (
            <ul>
              {residents.map(r => <li key={r.id}>{r.name} — {r.age} años</li>)}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
