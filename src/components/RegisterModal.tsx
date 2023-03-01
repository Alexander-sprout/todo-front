import React from 'react'
import styled from 'styled-components'

import { Input } from '../styled'
import { registerOnServer } from '../store/authReducer'
import { useAppDispatch } from '../store/store'

export const RegisterModal = () => {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [password2, setPassword2] = React.useState('')
    const dispatch = useAppDispatch()
    const handleSubmit = () => {
        if (password === password2) {
            dispatch(registerOnServer({ login: login, password: password }))
            setLogin('')
            setPassword('')
            setPassword2('')
        }
    }
    return (
        <Wrapper>
            <Container onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <Header>Регистрация</Header>
                <Warning> {password !== password2 && 'пароли не совпадают'}</Warning>
                <Input value={login} onChange={(e) => setLogin(e.target.value)} placeholder='login' />
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                <Input type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='password repeat' />
                <AddButton type='submit'>зарегестрироваться</AddButton>
            </Container>
        </Wrapper>
    )
}


const Container = styled.form`
padding:15px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
    width:300px;
    height:200px;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, 
rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
 rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const Wrapper = styled.body`
    display:flex;
    min-width:100vw;
    min-height:100vh;
    justify-content:center;
    align-items:center;
`
const Header = styled.div`
    margin-bottom:15px;
    font-family:'Roboto';
    font-weight:700
    
`
const AddButton = styled.button`
border-radius:10px;
border:0.5px solid black;
background-color:white;
margin-bottom:5px;
margin-left:auto;
margin-right:auto;
:hover{
    color:white;
    background-color:black
}
`

const Warning = styled.div`
    color:red
`