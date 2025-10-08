import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail, loginWithGoogle } from "../store/slices/auth/authSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmail({ email, password }));
  };

  const handleGoogle = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" disabled={status === "loading"}>Login</button>
      </form>
      <button onClick={handleGoogle} disabled={status === "loading"}>Login con Google</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
}

export default LoginForm;
