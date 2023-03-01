import React from 'react'
import styled from 'styled-components'

import { deleteAndGetTodo } from '../store/todoReducer'
import { RootState, useAppDispatch, useAppSelector } from '../store/store'
import { TodoForm } from './TodoForm'
import { DeleteButton } from '../styled'
import { Todo } from '../types'

export const TodoList = () => {
    const todo = useAppSelector(({ todos }) => todos.todo)
    const selectedCategoryId = useAppSelector(({ category }) => category.selectedCategory.id)
    const dispatch = useAppDispatch()
    if (!selectedCategoryId) { return null }
    return (
        <Container>
            <TodoForm />
            {todo.map((item: Todo, index: number) => {
                <Wrapper key={index}>  <TodoItem><TodoName>{item.name}</TodoName>  <DeleteButton onClick={() => {
                    dispatch(deleteAndGetTodo({ id: item.id.toString(), name: item.name }, { selectedCategoryId }))
                }} >x</DeleteButton></TodoItem></Wrapper>
            })}
        </Container >
    )
}
const Container = styled.div`
font-size:20px;
margin-left:10px;
padding:15px;
display:flex;
flex-direction:column;
    width:700px;
    height:100%;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, 
rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
 rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const TodoName = styled.div`
    display:flex;
    justify-content:flex-start;
    flex:1;
`
const TodoItem = styled.div`
    display:flex;
    flex-direction:row;
`
const Wrapper = styled.div`
    border-radius:15px;
    :hover{
        background: linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(113,119,122,1) 50%, rgba(3,14,18,1) 100%, rgba(94,101,103,1) 100%);
        color:white
    }
`