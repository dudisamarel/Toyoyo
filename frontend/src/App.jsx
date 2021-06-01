import React from 'react'
import { routes } from './routes.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/css/styles.css'
import { AppHeader } from './components/AppHeader.jsx'
export function App() {
  return (
    <BrowserRouter>
      <header>
        <AppHeader />
      </header>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
    </BrowserRouter>
  )
}
