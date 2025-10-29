
class Nodo {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(nodo) {
    this.children.push(nodo);
  }
}

// Clase N-ary Tree
export class NaryTree {
  constructor(rootValue) {
    this.root = new Nodo(rootValue);
  }

  getRoot() {
    return this.root;
  }
}

export { Nodo };
export default NaryTree;
