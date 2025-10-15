import { useState } from "react";
import { db } from "../firebase/config";
import {
    collection, addDoc, getDocs, query as buildQuery,
    where, orderBy, updateDoc, deleteDoc, doc
} from "firebase/firestore";

const useCollection = (table) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const getAll = async (cond1, cond2, cond3, ordering) => {
        setIsPending(true); setError(null);
        try {
            const colRef = collection(db, table);
            const constraints = [];
            const pushCond = c => { if (c && Array.isArray(c) && c.length === 3) constraints.push(where(c[0], c[1], c[2])); };
            pushCond(cond1); pushCond(cond2); pushCond(cond3);
            if (ordering && Array.isArray(ordering) && ordering.length) {
                constraints.push(orderBy(ordering[0], ordering[1] === "desc" ? "desc" : "asc"));
            }
            const q = constraints.length ? buildQuery(colRef, ...constraints) : colRef;
            const snap = await getDocs(q);
            setResults(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (err) { setError(err.message || "Error reading collection"); }
        finally { setIsPending(false); }
    };

    const add = async (data) => {
        setIsPending(true); setError(null);
        try {
            const ref = await addDoc(collection(db, table), data);
            setResults(prev => [...prev, { id: ref.id, ...data }]);
            return ref.id;
        } catch (err) { setError(err.message || "Error adding document"); return null; }
        finally { setIsPending(false); }
    };

    const updateById = async (id, partial) => {
        setIsPending(true); setError(null);
        try {
            await updateDoc(doc(db, table, id), partial);
            setResults(prev => prev.map(it => it.id === id ? { ...it, ...partial } : it));
            return true;
        } catch (err) { setError(err.message || "Error updating document"); return false; }
        finally { setIsPending(false); }
    };

    const removeById = async (id) => {
        setIsPending(true); setError(null);
        try {
            await deleteDoc(doc(db, table, id));
            setResults(prev => prev.filter(it => it.id !== id));
            return true;
        } catch (err) { setError(err.message || "Error deleting document"); return false; }
        finally { setIsPending(false); }
    };

    return { results, isPending, error, getAll, add, updateById, removeById };
};

export default useCollection;
