import React, { useEffect, useState } from "react";
import { GetAirportList } from "../../services/AirportService";

const AirportList = () => {
    const [airport, setAirport] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const res = await GetAirportList();
            setAirport(res);
        }
        getList();
    }, []);
    
    return (
        <div className="App">
            Airport list

            {airport && airport.map(m => (
                <div key={m["id"]}>{m["id"]} - {m["name"]} - {m["code"]}</div>
            ))}
        </div>
    );
}

export default AirportList;