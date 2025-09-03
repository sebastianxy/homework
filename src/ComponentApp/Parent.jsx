import { useState, useEffect } from "react";
import Child from "./Child";

export const ComponentApp = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("Categories:", categories);
  }, [categories]);

  const onInputChange = (e) => {
    setCategory(e.target.value);
  };

  const onAddCategory = () => {
    const trimmed = category.trim();
    if (trimmed.length === 0) return;
    setCategories((prev) => [...prev, trimmed]);
    setCategory("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ComponentApp - Challenge 04</h1>

      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Escribe una categoría"
          value={category}
          onChange={onInputChange}
          style={{ padding: "6px 8px", marginRight: 8 }}
        />
        <button onClick={onAddCategory}>Agregar</button>
      </div>

      <div>
        {categories.map((cat, index) => (
          <Child key={index} category={cat} />
        ))}
      </div>
    </div>
  );
};