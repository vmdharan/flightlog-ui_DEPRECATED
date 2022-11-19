import React from "react";

const Table = () => {
    const canEdit = true;
    const canDelete = true;

    const headers = [
        "header 1",
        "header 2",
        "header 3",
        "header 4",
        "header 5"
    ];
    const columns = [
        ["1", 'test', "2022-01-01", "123.45KM", "XBCD"],
        ["2", 'test2', "2022-01-01", "1123.45KM", "ABCD"],
        ["3", 'test3', "2022-01-01", "11123.45KM", "FBCD"],
        ["4", 'test4', "2022-01-01", "3123.45KM", "ABGD"],
    ];

    return (
        <table>
            <thead>
                <tr key="head">
                    {headers && headers.map(m => (
                        <th key={m}>{m}</th>
                    ))}
                    {canEdit && (
                        <th>Edit</th>
                    )}
                    {canDelete && (
                        <th>Delete</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {columns && columns.map(c => (
                    <tr key={c[0]}>
                        {c && c.map(c2 => (
                            <td key={c2}>{c2}</td>
                        ))}
                        {canEdit && (
                            <td>Edit</td>
                        )}
                        {canDelete && (
                            <td>Delete</td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


export default Table;