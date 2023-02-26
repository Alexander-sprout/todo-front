import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { TOKEN_KEY } from "../http/const";

export const authServer = createAsyncThunk(
    'user/auth', async (authdata: { login: string, password: string }) => {
        const { data } = await axios.post('/api/user/auth', authdata, { headers: { 'Content-Type': 'application/json' } })
        return data
    }
)
export const registerOnServer = createAsyncThunk(
    'user/register', async (registerdata: { login: string, password: string }) => {
        const { data } = await axios.post('/api/user/register', registerdata, { headers: { 'Content-Type': 'application/json' } })
        return data
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '' as null | string
    },
    reducers: {
        noToken: (state) => { state.token = '' }
    },
    extraReducers:
        (builder) => builder
            .addCase(authServer.fulfilled, (state, { payload }) => {
                localStorage.setItem(TOKEN_KEY, JSON.stringify(payload.token))
                state.token = localStorage.getItem(TOKEN_KEY)
            })
})


export default authSlice.reducer

export const { noToken } = authSlice.actions