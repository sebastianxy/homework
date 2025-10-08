import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/auth/authSlice";
import { auth, onAuthStateChanged } from "./firebase/config";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <LoginForm />
      <Home />
    </div>
  );
}

export default App;
