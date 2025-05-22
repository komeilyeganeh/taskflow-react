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
    }
]