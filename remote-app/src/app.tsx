import './shared/styles/index.css'
import './i18n'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './shared/router/router'

const router = createBrowserRouter(routes, { basename: '/remote' })

export const App = () => (
    <div data-remote-app>
        <RouterProvider router={router} />
    </div>
)
