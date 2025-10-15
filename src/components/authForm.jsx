import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail, registerWithEmail } from "./store/authSlice";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleLogin = () => {
        dispatch(loginWithEmail({ email, password }));
    };

    const handleRegister = () => {
        dispatch(registerWithEmail({ email, password }));
    };

    if (user) return null;

    return (
        <div style={{ margin: 20 }}>
            <h3>Login / Registro (recuerda que la contraseña debe tener 6 caracteres)</h3>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Registro</button>
        </div>
    );
};

export default AuthForm;
