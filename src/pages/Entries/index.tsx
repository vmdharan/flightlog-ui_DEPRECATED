import React, { useEffect, useState } from "react";
import Table, { TableParams } from "../../components/Table";
import { Entry } from "../../models/entry";
import { GetEntryList } from "../../services/EntryService";

const EntryList = () => {
    const [entry, setEntry] = useState<Entry[]>([]);

    useEffect(() => {
        const getList = async () => {
            const res = await GetEntryList();
            setEntry(res);
        }
        getList();
    }, []);

    const headers = entry && entry.length > 0 ? Object.keys(entry[0]).filter(f => f!= "_id") : [];
    const columns = entry && entry.length > 0 ?  
        Object.entries(entry).map(m => m[1])
        : [];
    const data: TableParams = {
        canEdit: true,
        canDelete: true,
        headers: headers,
        columns: columns,
    }
    
    return (
        <div className="App">
            <h1>Entry list</h1>

            <Table {...data} />
        </div>
    );
}

export default EntryList;