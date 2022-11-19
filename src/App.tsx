import React from 'react';
import { useEffect, useState } from 'react';
import { GetAircraftList } from './http/AircraftService';


const App = () => {
    const [aircraft, setAircraft] = useState([]);

    useEffect(() => {
        XApp();
    }, []);

    const XApp = async () => {
        setAircraft(await GetAircraftList());
    }

    return (
        <div className="App">
            FlightLog UI

            {aircraft && aircraft.map(m => (
                <div key={m["id"]}>{m["id"]} - {m["name"]} - {m["type"]}</div>
            ))}
        </div>
    );
}

export default App;
