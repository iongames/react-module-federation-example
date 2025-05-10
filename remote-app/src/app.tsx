import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './shared/router/router'
import './shared/styles/index.css'
import './i18n'

const router = createBrowserRouter(routes, { basename: '/remote' })

const App = () => <RouterProvider router={router} />

export default App
