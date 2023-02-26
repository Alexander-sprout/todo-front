import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosInstance } from "../http";
import { Todo } from "../types";
import { AppDispatch } from "./store";


export const getMyTodo = createAsyncThunk(
    '/todo', async (catId: { selectedCategoryId: number }) => {
        const { data } = await axiosInstance.post('/todo/list', catId)
        return data
    }
)
export const delTodo = createAsyncThunk(
    '/params', async (params: { id: string, name: string }) => {
        const { data } = await axiosInstance.delete(`/todo/${params.id}/${params.name}`)
        return data
    }
)
export const addTodo = createAsyncThunk(
    'addTodo', async (dataForAdd: { text: string, cat_id: number }) => {
        const { data } = await axiosInstance.post('/todo/add', dataForAdd)
        return data
    })

export const addAndGetTodo = (dataForAdd: { text: string, cat_id: number }, catId: { selectedCategoryId: number }) => async (dispatch: AppDispatch) => {
    await dispatch(addTodo(dataForAdd))
    await dispatch(getMyTodo(catId))
}

export const deleteAndGetTodo = (params: { id: string, name: string }, catId: { selectedCategoryId: number }) => async (dispatch: AppDispatch) => {
    await dispatch(delTodo(params))
    await dispatch(getMyTodo(catId))
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todo: [] as Todo[],
    },
    reducers: {},
    extraReducers:
        (builder) => builder
            .addCase(getMyTodo.fulfilled, (state, { payload }) => {
                state.todo = payload.data
            })
})


export default todoSlice.reducer