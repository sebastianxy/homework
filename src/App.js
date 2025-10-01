import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "./store/slices/counterSlice";
import { push, pop } from "./store/slices/stackSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);
  const stack = useSelector((state) => state.stack.stack);

  const [inputValue, setInputValue] = useState("");
  const [stackValue, setStackValue] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>Challenge 10</h1>

      
      <h2>Counter: {counterValue}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div>
        <input
          type="number"
          placeholder="Increment by..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            const val = Number(inputValue);
            if (!isNaN(val)) dispatch(incrementBy(val));
          }}
        >
          IncrementBy
        </button>
      </div>

      <hr />

      
      <h2>Stack</h2>
      <p>Contenido: {stack.join(", ") || "(vacío)"}</p>

      <input
        type="text"
        placeholder="Elemento para push"
        value={stackValue}
        onChange={(e) => setStackValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (stackValue.trim() !== "") dispatch(push(stackValue));
          setStackValue("");
        }}
      >
        Push
      </button>
      <button onClick={() => dispatch(pop())}>Pop</button>
    </div>
  );
}

export default App;
