
export default class Graph {
  constructor() {
    this.cities = new Map(); 
    this.people = new Map(); 
    this.nextPersonId = 1;
    this.nextCityId = 1;
  }

  addCity(name) {
    if (!name) throw new Error("City name required");
    const key = name.trim();
    if (this.cities.has(key)) return this.cities.get(key);
    const city = { id: `city-${this.nextCityId++}`, name: key, type: "city" };
    this.cities.set(key, city);
    return city;
  }

  addPerson({ name, age, cityName }) {
    if (!name) throw new Error("Person name required");
    if (!cityName) throw new Error("City is required");
    const cityKey = cityName.trim();
    const city = this.cities.get(cityKey) || this.addCity(cityKey);
    const person = {
      id: `person-${this.nextPersonId++}`,
      name: name.trim(),
      age: Number(age) || 0,
      city: city.name,
      type: "person"
    };
    this.people.set(person.id, person);
    return person;
  }


  getPeopleInCity(cityName) {
    const k = cityName?.trim();
    if (!k) return [];
    return Array.from(this.people.values()).filter(p => p.city === k);
  }


  toD3Format() {
    const nodes = [];
    const links = [];

    for (const city of this.cities.values()) {
      nodes.push({ id: city.id, label: city.name, type: "city", name: city.name });
    }

    
    for (const person of this.people.values()) {
      nodes.push({
        id: person.id,
        label: `${person.name} (${person.age})`,
        type: "person",
        name: person.name,
        age: person.age
      });

      const cityObj = this.cities.get(person.city);
      if (cityObj) {
        links.push({ source: person.id, target: cityObj.id });
      }
    }

    return { nodes, links };
  }

  
  getCityNames() {
    return Array.from(this.cities.values()).map(c => c.name);
  }

  
  seed({ cities = [], people = [] } = {}) {
    for (const c of cities) this.addCity(c);
    for (const p of people) this.addPerson(p);
  }
}
