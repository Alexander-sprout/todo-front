import React from 'react'
import styled from 'styled-components'

import { DeleteButton } from '../styled'
import { deleteAndGetCategory, selected } from '../store/categoryReducer'
import { useAppDispatch, useAppSelector } from '../store/store'
import { getMyTodo } from '../store/todoReducer'
import { CategoryForm } from './CategoryForm'
import { CategoryTodo } from 'types'


export const CategoryList = () => {
    const category = useAppSelector(({ category }) => category.category)
    const dispatch = useAppDispatch()
    return (
        <Container>
            <CategoryForm />
            {category.map((item: CategoryTodo, index: number) => <Wrapper key={index}> <Category onClick={() => {
                dispatch(selected(item))
                dispatch(getMyTodo({ selectedCategoryId: item.id }))
            }}>{item.name}</Category> <DeleteButton onClick={() => {
                dispatch(deleteAndGetCategory(item.id))
            }} >x</DeleteButton></Wrapper >)
            }

        </Container >
    )
}

const Category = styled.button`
margin-top:5px;
background-color:transparent;
border-color:transparent;
cursor:pointer;
font-size:20px;
flex:1;
display:flex;
justify-content:flex-start;
:hover{
    color:white
}

`

const Container = styled.div`
padding:15px;
display:flex;
flex-direction:column;
    width:500px;
    height:100%;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, 
rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
 rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const Wrapper = styled.div`
display:flex;
    border-radius:15px;
    :hover{
        background: linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(113,119,122,1) 50%, rgba(3,14,18,1) 100%, rgba(94,101,103,1) 100%);
    }
    color:white
`