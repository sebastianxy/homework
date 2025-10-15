import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/config";


export const registerWithEmail = createAsyncThunk(
    "auth/register",
    async ({ email, password }) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { uid: userCredential.user.uid, email: userCredential.user.email };
    }
);

export const loginWithEmail = createAsyncThunk(
    "auth/login",
    async ({ email, password }) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { uid: userCredential.user.uid, email: userCredential.user.email };
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await signOut(auth);
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        status: "idle",
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerWithEmail.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loginWithEmail.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            });
    },
});

export const { setUser } = authSlice.actions;


export const startAuthListener = () => (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({ uid: user.uid, email: user.email }));
        } else {
            dispatch(setUser(null));
        }
    });
};

export default authSlice.reducer;
