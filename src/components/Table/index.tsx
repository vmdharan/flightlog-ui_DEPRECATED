import React from "react";
import { CLIENT_URI } from "../../services/config";

export interface TableParams {
    canEdit: boolean;
    canDelete: boolean;
    headers: string[];
    columns: any[];
}

const Table = (params: TableParams) => {
    const canEdit = params.canEdit;
    const canDelete = params.canDelete;
    const editUrl = canEdit ? CLIENT_URI : "";
    const deleteUrl = canDelete ? CLIENT_URI : "";

    const headers = params.headers;
    const columns = params.columns;

    // columns?.map((row:any) => {
    //     console.log(row);
    //     headers?.map(h => {
    //         console.log(row[h])
    //     })
    // })
    

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
                {columns && columns.length > 0 && columns.map((row: any) => (
                    <tr key={row["id"]}>
                        {row && headers && headers.length > 0
                            && headers.map((col:string) => (
                                <td key={typeof row[col] === 'object' ? row[col]?.id : row[col]}>
                                    {typeof row[col] === 'object' ? row[col]?.name : row[col]}
                                    </td>
                            ))
                        }
                        {canEdit && (
                            <td>
                                <a href={editUrl+""}>Edit</a>
                            </td>
                        )}
                        {canDelete && (
                            <td>
                                <a href={deleteUrl+""}>Delete</a>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


export default Table;