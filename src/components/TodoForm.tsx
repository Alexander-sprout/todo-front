import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { AddButton, Input } from '../styled'
import { RootState, useAppDispatch } from '../store/store'
import { addAndGetTodo } from '../store/todoReducer'



export const TodoForm = () => {
    const [text, setText] = React.useState('')
    const dispatch = useAppDispatch()
    const id = useSelector((state: RootState) => state.category.selectedCategory.id)
    const todo = useSelector((state: RootState) => state.todos.todo)
    const categoryName = useSelector((state: RootState) => state.category.selectedCategory.name)
    const handleSubmit = () => {
        if (text) {
            dispatch(addAndGetTodo({ text: text, cat_id: id }, { selectedCategoryId: id }))
            setText('')
        }
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}>
            <Header>{categoryName}
                {!todo.length && ' (категория пуста)'}</Header>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <AddButton type='submit'>добавить запись</AddButton>
        </form>
    )
}

const Header = styled.div`
font-size:25px;
display:flex;
justify-content:center;
`