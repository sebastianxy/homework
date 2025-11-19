export default class GreenZone {
  constructor(name) {
    this.name = name;
    this.subzones = [];
  }
  addSubzone(zone) {
    this.subzones.push(zone);
  }
  editName(newName) {
    this.name = newName.trim();
  }
  totalZones() {
    let total = 1;
    for (const z of this.subzones) total += z.totalZones();
    return total;
  }
  maxHeight() {
    if (this.subzones.length === 0) return 1;
    let heights = this.subzones.map(z => z.maxHeight());
    return 1 + Math.max(...heights);
  }
}
