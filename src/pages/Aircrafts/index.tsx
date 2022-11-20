import React, { useEffect, useState } from "react";
import Table, { TableParams } from "../../components/Table";
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

    const headers = aircraft && aircraft.length > 0 ? Object.keys(aircraft[0]).filter(f => f!= "_id") : [];
    const columns = aircraft && aircraft.length > 0 ?  
        Object.entries(aircraft).map(m => m[1])
        : [];
    const data: TableParams = {
        canEdit: true,
        canDelete: true,
        headers: headers,
        columns: columns,
    }
    
    return (
        <div className="App">
            <h1>Aircraft list</h1>

            <Table {...data} />
        </div>
    );
};

export default AircraftList;