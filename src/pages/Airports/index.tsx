import React, { useEffect, useState } from "react";
import Table, { TableParams } from "../../components/Table";
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

    const headers = airport && airport.length > 0 ? Object.keys(airport[0]).filter(f => f!= "_id") : [];
    const columns = airport && airport.length > 0 ?  
        Object.entries(airport).map(m => m[1])
        : [];
    const data: TableParams = {
        canEdit: true,
        canDelete: true,
        headers: headers,
        columns: columns,
    }
    
    return (
        <div className="App">
            <h1>Airport list</h1>

            <Table {...data} />
        </div>
    );
}

export default AirportList;