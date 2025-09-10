import { useState, useEffect } from "react";
import Child from "./child";

export const ComponentApp = () => {
  const [imageId, setImageID] = useState("");
  const [data, setData] = useState([]);
  const [titulo, setTitle] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    console.log("Titulos y IDs de imagenes:", data);
  }, [data]);

  const onInputChange = (e) => {
    setImageID(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const onAddimageID = () => {
    const trimmedID = imageId.trim();
    const trimmedTitulo = titulo.trim();
    if (trimmedID.length === 0 || trimmedTitulo.length === 0) return;
    setData((prev)=>[...prev, {id: trimmedID, titulo: trimmedTitulo}])
    setImageID("")
    setTitle("")
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Parcial 1 - pagina de imagenes</h1>

      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="escribe un titulo para la imagen a colocar"
          value={titulo}
          onChange={onTitleChange}
          style={{ padding: "6px 8px", marginRight: 8 }}
        />
        <input
          type="number"
          placeholder="Escribe el ID de una imagen"
          value={imageId}
          onChange={onInputChange}
          style={{ padding: "6px 8px", marginRight: 8 }}
        />
        <button onClick={onAddimageID}>Agregar</button>
      </div>

      <div>
        {data.map((img, index) => (
        <Child key={index} imageId={img.id} titulo={img.titulo} />
        ))}
      </div>
    </div>
  );
};