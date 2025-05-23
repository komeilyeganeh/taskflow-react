import { Login } from '@/components/auth/login'
import { Signup } from '@/components/auth/signup'
import { Board } from '@/pages/board'
import { Home } from '@/pages/home'

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/board/:id',
        element: <Board />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    }
]