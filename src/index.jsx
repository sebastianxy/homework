// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './firstApp';   // Importamos el componente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);
