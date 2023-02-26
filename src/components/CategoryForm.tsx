import React from 'react'

import { useAppDispatch } from '../store/store'
import { addAndGetCategory, getMyCategory } from '../store/categoryReducer'
import { AddButton, Input } from '../styled'



export const CategoryForm = () => {
    const [text, setText] = React.useState('')
    const dispatch = useAppDispatch()
    const handleSubmit = () => {
        if (text) {
            dispatch(addAndGetCategory({ text }))
            setText('')
        }
    }
    React.useEffect(() => {
        dispatch(getMyCategory())
    }, [])
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <AddButton type='submit' >Добавить категорию</AddButton>
        </form>
    )
}




