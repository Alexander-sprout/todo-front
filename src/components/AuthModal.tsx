import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { authServer } from '../store/authReducer'
import { useAppDispatch, useAppSelector } from '../store/store'
import { AddButton, Input } from '../styled'



export const AuthModal = () => {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useAppDispatch()
    const history = useHistory()
    const token = useAppSelector(({ auth }) => auth.token)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(authServer({ login, password }))
        setLogin('')
        setPassword('')
        console.log(token)
        if (token) {
            history.push('/')
        }
    }

    return (
        <Wrapper>
            <Container onSubmit={handleSubmit}>
                <Header>
                    Войдите или зарегистрируйтесь
                </Header>
                <Input value={login} onChange={(e) => setLogin(e.target.value)} placeholder='login' />
                <Input value={password} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                <AddButton type='submit'>Войти</AddButton>
                <AddButton onClick={() => {
                    dispatch(registerOpen())
                    history.push('/register')
                }}>зарегистрироваться</AddButton>
            </Container >
        </Wrapper>
    )
}
// )
// }
// }

const Container = styled.form`
padding:15px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
    width:300px;
    height:150px;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, 
rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
 rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const Wrapper = styled.body`
    display:flex;
    min-width:100vh;
    min-height:100vh;
    justify-content:center;
    align-items:center;
`
const Header = styled.div`
    margin-bottom:15px;
    font-family:'Roboto';
    font-weight:700
    
`