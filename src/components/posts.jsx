import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "./store/postSlice";

const Posts = () => {
    const [text, setText] = useState("");
    const posts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === "") return;
        dispatch(createPost(text));
        setText("");
    };

    return (
        <div style={{ margin: 20 }}>
            <h3>Posts</h3>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe un post" />
            <button onClick={handleAdd}>Publicar</button>
            <ul>
                {posts.map((p, i) => (
                    <li key={i}>{p.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
