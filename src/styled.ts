import styled from "styled-components";

export const DeleteButton = styled.button`
    border-color:transparent;
    background-color:transparent;
    cursor:pointer;
`

export const AddButton = styled.button`
border-radius:10px;
border:0.5px solid black;
background-color:white;
margin-bottom:5px;
:hover{
    color:white;
    background-color:black
}
`

export const Input = styled.input`
border-radius:10px;
    border:0.5px solid black;
    margin-bottom:5px;
    margin-right:5px;
    ::placeholder{
      text-align:center;
    }
`