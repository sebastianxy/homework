// src/CounterApp.jsx
import { useState } from "react";
import PropTypes from "prop-types";

function CounterApp({ initialValue }) {
  // Hook useState para manejar el estado del contador
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(initialValue);

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

// Validación de props
CounterApp.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default CounterApp;
