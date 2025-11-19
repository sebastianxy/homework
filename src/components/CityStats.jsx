export default function CityStats({ city }) {
  if (!city) return <p>Seleccione una ciudad...</p>;

  return (
    <div>
      <h3>Estadisticas de la ciudad</h3>
      <p>Total de zonas verdes: {city.totalZones()}</p>
      <p>Altura maxima del arbol: {city.maxHeight()}</p>
    </div>
  );
}