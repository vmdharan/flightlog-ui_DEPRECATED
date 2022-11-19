import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => (
    <>
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/aircraft">Aircrafts</Link>
            <Link to="/airport">Airports</Link>
            <Link to="/entry">Entries</Link>
        </nav>

        <Outlet />
    </>
);

export default Root;