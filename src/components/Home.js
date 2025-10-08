import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutFirebase } from "../store/slices/auth/authSlice";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (!user) return null;

  return (
    <div>
      <h3>Bienvenido, {user.email}</h3>
      <button onClick={() => dispatch(logoutFirebase())}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
