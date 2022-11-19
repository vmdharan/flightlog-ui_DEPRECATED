import React, { useEffect, useState } from "react";
import { GetAircraftList } from '../../services/AircraftService';

const AircraftList = () => {
    const [aircraft, setAircraft] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const res = await GetAircraftList();
            setAircraft(res);
        }
        getList();
    }, []);
    
    return (
        <div className="App">
            <h1>Aircraft list</h1>

            {aircraft && aircraft.map(m => (
                <div key={m["id"]}>{m["id"]} - {m["name"]} - {m["type"]}</div>
            ))}
        </div>
    );
};

export default AircraftList;