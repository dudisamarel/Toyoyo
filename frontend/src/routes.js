import { Dashboard } from './components/Dashboard.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { ToyApp } from './pages/ToyApp.jsx'
import ToyDetails from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/toy',
        component: ToyApp,
    },
    {
        path: '/toy/edit',
        component: ToyEdit,
    },
    {
        path: '/toy/edit/:id',
        component: ToyEdit,
    },
    {
        path: '/toy/details/:id',
        component: ToyDetails,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
 
]