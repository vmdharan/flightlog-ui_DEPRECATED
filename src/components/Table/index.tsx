import React from "react";
import { CLIENT_URI } from "../../services/config";

export interface TableParams {
    canEdit: boolean;
    canDelete: boolean;
    headers: string[];
    columns: string[][];
}

const Table = (params: TableParams) => {
    const canEdit = params.canEdit;
    const canDelete = params.canDelete;
    const editUrl = canEdit ? CLIENT_URI : "";
    const deleteUrl = canDelete ? CLIENT_URI : "";

    const headers = params.headers;
    const columns = params.columns;

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