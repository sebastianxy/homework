import React, { useEffect, useRef, useState } from "react";
import Tree from "react-d3-tree";
import BinaryTree from "./BinaryTree";

export default function BinaryTreeVisualizer() {
  const [tree] = useState(() => new BinaryTree());
  const [input, setInput] = useState("");
  const [checkValue, setCheckValue] = useState("");
  const [treeData, setTreeData] = useState(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  const defaultSeries = [50, 30, 70, 20, 40, 60, 80];

  useEffect(() => {
    defaultSeries.forEach((n) => tree.insert(n));
    console.log("PreOrder:", tree.preorder());
    console.log("InOrder:", tree.inorder());
    console.log("PostOrder:", tree.postorder());
    setTreeData(tree.toD3());

    const el = containerRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setDimensions({ width: rect.width || 800, height: rect.height || 600 });
    }
  }, []);

  const handleAdd = () => {
    const nums = input
      .split(/[ ,]+/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map(Number)
      .filter((n) => !Number.isNaN(n));

    if (nums.length === 0) return;
    nums.forEach((n) => tree.insert(n));
    console.log("Después de insertar - PreOrder:", tree.preorder());
    console.log("Después de insertar - InOrder:", tree.inorder());
    console.log("Después de insertar - PostOrder:", tree.postorder());
    setTreeData(tree.toD3());
    setInput("");
  };

  const handleCheck = () => {
    const n = Number(checkValue);
    if (Number.isNaN(n)) return alert("Ingresa un número válido");
    const found = tree.contains(n);
    alert(found ? `${n} sí está en el árbol` : `${n} NO está en el árbol`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Árbol Binario — Challenge 14</h1>
      <p className="mb-4">
        Serie inicial: {defaultSeries.join(", ")} — en la consola estan los
        recorridos.
      </p>

      <div className="mb-4 flex gap-2">
        <input
          className="border p-2 rounded"
          placeholder="Agregar números (ej: 10 15 20)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 rounded bg-gray-800 text-white"
          onClick={handleAdd}
        >
          Insertar
        </button>
      </div>

      <div className="mb-4 flex gap-2">
        <input
          className="border p-2 rounded"
          placeholder="Verificar si existe (ej: 40)"
          value={checkValue}
          onChange={(e) => setCheckValue(e.target.value)}
        />
        <button
          className="px-4 py-2 rounded bg-blue-700 text-white"
          onClick={handleCheck}
        >
          Comprobar
        </button>
      </div>

      <div
        className="border rounded p-2"
        style={{ height: 600 }}
        ref={containerRef}
      >
        {treeData ? (
          <Tree
            data={treeData}
            orientation="vertical"
            translate={{ x: dimensions.width / 2, y: 50 }}
            pathFunc="elbow"
            collapsible={false}
            zoomable={true}
            initialDepth={10}
            nodeSize={{ x: 100, y: 60 }}
          />
        ) : (
          <div>Generando visualización...</div>
        )}
      </div>
    </div>
  );
}
