import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkedListPage from "./pages/LinkedListPage";
import DoubleLinkedPage from "./pages/DoubleLinkedPage";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Challenge 07</h1>
        <nav>
          <Link to="/linked">Linked List</Link> |{" "}
          <Link to="/doubly">Double Linked List</Link>
        </nav>
        <Routes>
          <Route path="/linked" element={<LinkedListPage />} />
          <Route path="/doubly" element={<DoubleLinkedPage />} />
          <Route path="/" element={<p>Selecciona una opcion del menu</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
