import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import ErrorPage from './error-page';
import Root from './routes';

import Dashboard from './pages/Dashboard';
import AircraftList from './pages/Aircrafts';
import AirportList from './pages/Airports';
import EntryList from './pages/Entries';

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
