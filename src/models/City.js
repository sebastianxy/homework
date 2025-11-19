import GreenZone from "./GreenZone";

export default class City {
  constructor(name) {
    this.name = name;
    this.greenZones = [];
  }

  addGreenZone(name) {
    const newZone = new GreenZone(name);

    if (this.greenZones.length === 0) {
      this.greenZones.push(newZone);
      return newZone;
    }

    const findLast = (zones) => {
      let last = zones[zones.length - 1];
      while (last.subzones.length > 0) {
        last = last.subzones[last.subzones.length - 1];
      }
      return last;
    };

    const parent = findLast(this.greenZones);
    parent.addSubzone(newZone);
    return newZone;
  }

  findZoneByPath(pathArray) {
    if (!pathArray || pathArray.length === 0) return null;

    const normalize = (s) => s.trim().toLowerCase();

    let currentList = this.greenZones;
    let node = null;

    for (const nameRaw of pathArray) {
      const name = normalize(nameRaw);

      node = currentList.find(z => normalize(z.name) === name);

      if (!node) return null;

      currentList = node.subzones;
    }

    return node;
  }

  editGreenZone(pathArray, newName) {
    const zone = this.findZoneByPath(pathArray);
    if (!zone) throw new Error("Zone not found");
    zone.editName(newName);
  }

  totalZones() {
    return this.greenZones.reduce((acc, z) => acc + z.totalZones(), 0);
  }

  maxHeight() {
    if (this.greenZones.length === 0) return 0;
    return Math.max(...this.greenZones.map(z => z.maxHeight()));
  }
}