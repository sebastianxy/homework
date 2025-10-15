import { useEffect, useState } from "react";
import useCollection from "./components/hooks/useCollection";

export default function Crud() {
    const { results, isPending, error, getAll, add, updateById, removeById } =
        useCollection("users"); // tu colección
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => { getAll(null, null, null, ["name", "asc"]); }, []);

    const save = async () => {
        if (!name.trim()) return;
        await add({ name: name.trim(), email: email.trim(), createdAt: Date.now() });
        setName(""); setEmail("");
    };

    const rename = async (id, currentName) => {
        const next = prompt("Nuevo nombre:", currentName || "");
        if (next == null) return;
        await updateById(id, { name: next });
    };

    const remove = async (id) => {
        if (!window.confirm("¿Eliminar este documento?")) return;
        await removeById(id);
    };

    return (
        <div style={{ maxWidth: 560, margin: "2rem auto", fontFamily: "sans-serif" }}>
            <h2>CRUD Firestore (Challenge 12)</h2>

            <div style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr auto" }}>
                <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={save} disabled={isPending}>{isPending ? "Guardando..." : "Agregar"}</button>
            </div>

            {error && <p style={{ color: "crimson" }}>{error}</p>}

            <ul>
                {results.map((u) => (
                    <li key={u.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <code style={{ flex: 1 }}>{JSON.stringify(u)}</code>
                        <button onClick={() => rename(u.id, u.name)} disabled={isPending}>Editar</button>
                        <button onClick={() => remove(u.id)} disabled={isPending}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
