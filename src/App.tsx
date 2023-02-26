import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React from 'react'

import { Main } from './Main'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { AuthModal } from './components/AuthModal'
import { RegisterModal } from './components/RegisterModal'
import { RouterWrapper } from './components/RouterWrapper'

const routes = [
    {
        component: Main,
        path: '/',
    },
    {
        component: AuthModal,
        path: '/auth',
    },
    {
        component: RegisterModal,
        path: '/register',
    },
]

export const App = () => {
    return (
        <Provider store={store}>

            <BrowserRouter>
                <Switch>
                    <RouterWrapper>
                        {routes.map(({ component, path }) => (
                            <Route key={path} exact path={path} component={component} />
                        ))}
                    </RouterWrapper>
                </Switch>
            </BrowserRouter>
        </Provider>

    )
}