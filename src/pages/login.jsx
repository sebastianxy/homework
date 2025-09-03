import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Coloca tu usuario aqui"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 m-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Ingresar
      </button>
    </form>
  );
};

export default Login;