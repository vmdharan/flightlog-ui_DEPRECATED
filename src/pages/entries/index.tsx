import React, { useEffect, useState } from "react";
import { GetEntryList } from "../../services/EntryService";

const EntryList = () => {
    const [entry, setEntry] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const res = await GetEntryList();
            setEntry(res);
        }
        getList();
    }, []);
    
    return (
        <div className="App">
            Entry list

            {entry && entry.map(m => (
                <div key={m["id"]}>{m["id"]} - {m["name"]} - {m["type"]}</div>
            ))}
        </div>
    );
}

export default EntryList;