import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/authSlice";

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const notCount = useSelector((state) => state.notifications.stack.length);
    const dispatch = useDispatch();
    

    return (
        <header style={{ display: "flex", justifyContent: "space-between", padding: 10, background: "#eee" }}>
            <h2>Parcial 2 - Red Social UAO</h2>
            <div>
                <span style={{ marginRight: 20 }}>Notifs: {notCount}</span>
                {user ? (
                    <>
                        <span>{user.email}</span>
                        <button onClick={() => dispatch(logout())} style={{ marginLeft: 10 }}>Salir</button>
                    </>
                ) : (
                    <span>No autenticado</span>
                )}
            </div>
        </header>
    );
};

export default Header;
