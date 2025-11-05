import React, { useState } from "react";
import GraphModel from "./models/graph";
import GraphView from "./components/GraphView";
import AddCity from "./components/AddCity";
import AddPerson from "./components/AddPerson";
import CityResidents from "./components/CityResidents";
import "./App.css";


const graphSingleton = new GraphModel();


graphSingleton.seed({
  cities: ["Bogotá", "Medellín", "Cali"],
  people: [
    { name: "Ana", age: 28, cityName: "Bogotá" },
    { name: "Luis", age: 35, cityName: "Medellín" },
    { name: "María", age: 22, cityName: "Bogotá" },
  ],
});

export default function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [graphData, setGraphData] = useState(graphSingleton.toD3Format());

  
  const refreshGraph = () => {
    setGraphData({ ...graphSingleton.toD3Format() });
  };

  
  const handleAddCity = (name) => {
    graphSingleton.addCity(name);
    refreshGraph();
  };

 
  const handleAddPerson = (person) => {
    graphSingleton.addPerson(person);
    refreshGraph();
  };

  
  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
  };

  
  const residents = selectedCity
    ? graphSingleton.getPeopleInCity(selectedCity)
    : [];

  
  const onClickNode = (nodeId) => {

    const city = Array.from(graphSingleton.cities.values()).find(
      (c) => c.id === nodeId
    );
    if (city) {
      setSelectedCity(city.name);
      return;
    }

    const person = graphSingleton.people.get(nodeId);
    if (person) {
      alert(
        `Persona: ${person.name}\nEdad: ${person.age}\nCiudad: ${person.city}`
      );
    }
  };

  return (
    <div className="App" style={{ padding: 16 }}>
      <h1>Challenge 16 — Amigos y Ciudades (Grafos)</h1>

      <div style={{ display: "flex", gap: 24 }}>
        {/* Panel Izquierdo */}
        <div style={{ width: 340 }}>
          <AddCity onAddCity={handleAddCity} />
          <AddPerson
            cityOptions={graphSingleton.getCityNames()}
            onAddPerson={handleAddPerson}
          />

          <CityResidents
            cityNames={graphSingleton.getCityNames()}
            onSelectCity={handleSelectCity}
            residents={residents}
            selectedCity={selectedCity}
          />

          <div style={{ marginTop: 16 }}>
            <h3>Datos (debug)</h3>
            <p>Cantidad ciudades: {graphSingleton.cities.size}</p>
            <p>Cantidad personas: {graphSingleton.people.size}</p>
          </div>
        </div>

        {/* Panel Derecho: Grafo */}
        <div>
          <GraphView data={graphData} onClickNode={onClickNode} />
        </div>
      </div>
    </div>
  );
}
