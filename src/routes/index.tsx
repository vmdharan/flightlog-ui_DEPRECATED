import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../components/sidenav';
import '../styles/components.scss';

const Root = () => (
    <div className='rootScreen'>
        <SideNav />

        <div className='detailsPanel'>
            <Outlet />
        </div>
    </div>
);

export default Root;