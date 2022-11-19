import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import ErrorPage from './error-page';
import Root from './routes';

import Dashboard from './pages/dashboard';
import AircraftList from './pages/aircrafts';
import AirportList from './pages/airports';
import EntryList from './pages/entries';

const router = createBrowserRouter([
    { 
        path: '/', element: <Root />, errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/aircraft', element: <AircraftList /> },
            { path: '/airport', element: <AirportList /> },
            { path: '/entry', element: <EntryList /> }
        ]
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
