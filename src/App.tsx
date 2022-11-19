import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    Outlet,
    Route
} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import AircraftList from './pages/aircrafts';
import AirportList from './pages/airports';
import EntryList from './pages/entries';
import ErrorPage from './error-page';
import Root from './routes';

const router = createBrowserRouter([
    { 
        path: '/', element: <Root />, errorElement: <ErrorPage />,
        children: [
            { path: '/aircraft', element: <AircraftList /> },
            { path: '/airport', element: <AirportList /> },
            { path: '/entry', element: <EntryList /> }
        ]
    },
]);

const App = () => {
    return (
        <div className="App">
            FlightLog UI 

            <RouterProvider router={router} />
        </div>
    );
}

export default App;
