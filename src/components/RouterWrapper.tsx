import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from 'store/store'


export const RouterWrapper = ({ children }) => {
    const history = useHistory()
    const token = useSelector<RootState>(({ auth }) => auth.token)
    React.useEffect(() => {
        if (!token) {
            history.replace('/auth')
        }
        history.push('/')
    }, [token])

    return (
        <>
            {children}
        </>
    )
}