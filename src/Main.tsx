import React from 'react'
import styled from 'styled-components'

import { TodoList } from './components/TodoList'
import { CategoryList } from './components/CategoryList'

export const Main = () => {
    return (
        <Container>
            <CategoryList />
            <TodoList />
        </Container >
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;

`




