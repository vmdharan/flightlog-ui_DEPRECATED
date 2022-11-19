import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/components.scss';

const SideNav = () => {

    return (
        <div className="sideNav">
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/aircraft">Aircrafts</Link>
                <Link to="/airport">Airports</Link>
                <Link to="/entry">Entries</Link>
            </nav>
        </div>

    );
}

export default SideNav;