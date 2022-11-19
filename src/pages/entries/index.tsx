import React, { useEffect, useState } from "react";
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
    
    return (
        <div className="App">
            Entry list

            {entry && entry.map(m => (
                <div key={m["id"]}>
                    {m["id"]} 
                    - {m["aircraft"]?.name}
                    - {m["origin"]?.code}
                    - {m["destination"]?.code}
                    - {m["distance"]}
                    - {m["fuelPctTakeoff"]}
                    - {m["fuelPctLanding"]}
                    - {m["flightTime"]}
                </div>
            ))}
        </div>
    );
}

export default EntryList;