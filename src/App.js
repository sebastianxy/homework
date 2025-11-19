//Sebastian Cobos Alvarado

import { useState } from "react";
import Graph from "./models/Graph";
import AddCity from "./components/AddCity";
import AddGreenZone from "./components/AddGreenZone";
import CityStats from "./components/CityStats";
import GraphView from "./components/GraphView";
import styles from "./App.module.scss";

const graph = new Graph();

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [graphData, setGraphData] = useState(graph.toD3Format());

  const refresh = () => setGraphData({ ...graph.toD3Format() });

  const addCity = (name) => {
    graph.addCity(name);
    refresh();
  };

  const deleteCity = (name) => {
    graph.deleteCity(name);
    refresh();
    if (selectedCity === name) setSelectedCity(null);
  };

  const addZone = (zoneName) => {
    const city = graph.getCity(selectedCity);
    if (!city) return console.error("City not found:", selectedCity);

    city.addGreenZone(zoneName);
    refresh();
  };

  return (
    <div className={styles.appContainer}>

      <div className={styles.card}>
        <h1>Parcial 3 — Sebastian Cobos Alvarado</h1>

        <div className={styles.layout}>
          
          <div className={styles.leftPanel}>
            <h3>Selector de ciudades</h3>

            <AddCity onAddCity={addCity} />

            <h3>Seleccione una ciudad</h3>
            <select
              onChange={(e) => setSelectedCity(e.target.value)}
              value={selectedCity || ""}
            >
              <option value="">Ciudad...</option>
              {[...graph.cities.keys()].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {selectedCity && (
              <button onClick={() => deleteCity(selectedCity)}>
                Eliminar ciudad
              </button>
            )}

            {selectedCity && (
              <>
                <h3>Añadir zona verde</h3>
                <AddGreenZone city={selectedCity} onAddZone={addZone} />

                
                <CityStats city={graph.getCity(selectedCity)} />
              </>
            )}
          </div>

          <div className={styles.rightPanel}>
            <h2>Grafo de las ciudades actuales</h2>
            <GraphView data={graphData} />
          </div>
        </div>

      </div>
    </div>
  );
}