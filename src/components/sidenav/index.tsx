import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/components.scss';

const SideNav = () => {

    return (
        <div className="sideNav">
            <nav>
                <Link to="/" className="no-text-decoration">
                    <div className="menu-title">Dashboard</div>
                </Link>
                <Link to="/aircraft" className="no-text-decoration">
                    <div className="menu-item">Aircrafts</div>
                </Link>
                <Link to="/airport" className="no-text-decoration">
                    <div className="menu-item">Airports</div>
                </Link>
                <Link to="/entry" className="no-text-decoration">
                    <div className="menu-item">Entries</div>
                </Link>
            </nav>
        </div>

    );
}

export default SideNav;