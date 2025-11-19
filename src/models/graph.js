import City from "./City";

export default class Graph {
  constructor() {
    this.cities = new Map();
    this.edges = [];
  }

  addCity(name) {
    const key = name.trim();
    if (!this.cities.has(key)) {
      this.cities.set(key, new City(key));
    }
  }

  deleteCity(name) {
    this.cities.delete(name);
    this.edges = this.edges.filter(e => e.a !== name && e.b !== name);
  }

  connectCities(a, b) {
    if (!this.cities.has(a) || !this.cities.has(b)) return;
    this.edges.push({ a, b });
  }

  getCity(name) {
    return this.cities.get(name);
  }

  toD3Format() {
    const nodes = [];
    const links = [];

    for (const city of this.cities.values()) {
      nodes.push({
        id: city.name,
        label: city.name,
        type: "city",
        color: "#ffcc00"
      });
    }

    for (const e of this.edges) {
      links.push({
        source: e.a,
        target: e.b
      });
    }

    for (const city of this.cities.values()) {
      for (const zone of city.greenZones) {
        this._addZoneRecursively(nodes, links, zone, city.name);
      }
    }

    return { nodes, links };
  }

  _addZoneRecursively(nodes, links, zone, parentId) {
    const zoneId = `${parentId}-${zone.name}`;

    nodes.push({
      id: zoneId,
      label: zone.name,
      type: "green",
      color: "#66cc66"
    });

    links.push({
      source: parentId,
      target: zoneId
    });

    for (const sub of zone.subzones) {
      this._addZoneRecursively(nodes, links, sub, zoneId);
    }
  }
}
