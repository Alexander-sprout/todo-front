import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import todos from './todoReducer'
import category from './categoryReducer'
import auth from './authReducer'




export const store = configureStore({
    reducer: { todos, category, auth },
}

)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


export const useAppSelector = useSelector<RootState>