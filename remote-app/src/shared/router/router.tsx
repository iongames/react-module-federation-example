import { ErrorPage } from '@/pages/error-page'
import { RouteObject } from 'react-router-dom'
import { MAIN_PAGE, TEST_PAGE } from './routes'
import { TestPage } from '@/pages/test-page'

export const routes: RouteObject[] = [
    {
        path: MAIN_PAGE,
        element: <div className="bg-primary h-screen w-screen" />,
        errorElement: <ErrorPage />,
    },
    {
        path: TEST_PAGE,
        element: <TestPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/*',
        element: <ErrorPage />,
    },
]
