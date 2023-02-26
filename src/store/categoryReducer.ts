import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../http";

import { CategoryTodo } from "../types";
import { AppDispatch } from "./store";

export const getMyCategory = createAsyncThunk(
    '/category', async () => {
        const { data } = await axiosInstance.get('/category/list')
        return data
    }
)
export const addCategory = createAsyncThunk(
    'addCategory', async (dataForAdd: { text: string }) => {
        const { data } = await axiosInstance.post('/category/add', dataForAdd)
        return data
    })
export const delCategory = createAsyncThunk(
    'params', async (params: number) => {
        const { data } = await axiosInstance.delete(`/category/${params}`)
        return data
    }
)
export const addAndGetCategory = (dataForAdd: { text: string }) => async (dispatch: AppDispatch) => {
    await dispatch(addCategory(dataForAdd))
    await dispatch((getMyCategory()))
}
export const deleteAndGetCategory = (params: number) => async (dispatch: AppDispatch) => {
    await dispatch(delCategory(params))
    dispatch(getMyCategory())
}
const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: [] as CategoryTodo[],
        selectedCategory: {} as { id: number, name: string, userId: number }
    },
    reducers: {
        selected: (state, action) => {
            state.selectedCategory = action.payload
            localStorage.setItem('category', JSON.stringify(action.payload))
        },
        restoreCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
    extraReducers:
        (builder) => builder
            .addCase(getMyCategory.fulfilled, (state, { payload }: any) => {
                state.category = payload.data

            })
})


export const { selected, restoreCategory } = categorySlice.actions



export default categorySlice.reducer