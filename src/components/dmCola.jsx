import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToQueue, dequeue } from "./store/dmColaSlice";

const DMQueue = () => {
    const [msg, setMsg] = useState("");
    const queue = useSelector((state) => state.dmQueue.queue);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (msg.trim() === "") return;
        dispatch(addToQueue({ text: msg }));
        setMsg("");
    };

    return (
        <div style={{ margin: 20 }}>
            <h3>Cola de DMs</h3>
            <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Nuevo DM" />
            <button onClick={handleAdd}>Añadir</button>
            <button onClick={() => dispatch(dequeue())}>Quitar</button>
            <ul>
                {queue.map((m, i) => (
                    <li key={i}>{m.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default DMQueue;
