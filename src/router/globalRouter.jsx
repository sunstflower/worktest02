import { Suspense, lazy } from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Spin } from 'antd';
import { store } from '@/store';
import Login from '@/pages/login';
import Home from '@/pages/home';
import Users from '@/pages/users';
import PageContent from '@/pages/PageContent';

function globalRoute() {
    // "懒加"
    const Entry = lazy(() => import('@/pages/entry'));

    return createHashRouter([
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/',
            element: (
                <Provider store={store}>
                    <Suspense fallback={<Spin />}>
                        <Entry />
                    </Suspense>
                </Provider>
            ),
            children: [
                {
                    path: '/home',
                    element: <Home />,
                },
                {
                    path: '/users',
                    element: <Users />,
                },
                {
                    path: '/page/:id',
                    element: <PageContent />,
                },
                {
                    path: '/',
                    element: <Navigate to="/home" />,
                },
                {
                    path: '*',
                    element: <Navigate to="/login" />,
                },
            ],
        },
    ]);
}

const globalRouter = globalRoute();

export default globalRouter;