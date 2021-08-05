import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'
export default function PublicRoute({component:Component, ...Rest}) {
  const auth = useAuth()

    return (
        <Route {...Rest}>
            {
             ! auth.isLogged() ?
                <Component />
                  : <Redirect to="/SuperHero" />
            }
        </Route>
    )
}
