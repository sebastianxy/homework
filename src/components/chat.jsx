import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, listenMessages } from "./store/chatSlice";

const Chat = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);

    useEffect(() => {
        dispatch(listenMessages());
    }, [dispatch]);

    const handleSend = () => {
        if (text.trim() !== "") {
            dispatch(sendMessage(text));
            setText("");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Chat Personal</h2>
            <div style={{ border: "1px solid gray", padding: 10, height: 200, overflowY: "scroll" }}>
                {messages.map((msg, i) => (
                    <p key={i}>{msg.text}</p>
                ))}
            </div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe un mensaje"
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    );
};

export default Chat;
