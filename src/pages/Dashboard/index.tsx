import React from "react";
import Table, { TableParams } from "../../components/Table";

const initParams: TableParams = {
    canEdit: true,
    canDelete: true,
    headers: [
        "header 1",
        "header 2",
        "header 3",
        "header 4",
        "header 5"
    ],
    columns: [
        ["1", 'test', "2022-01-01", "123.45KM", "XBCD"],
        ["2", 'test2', "2022-01-01", "1123.45KM", "ABCD"],
        ["3", 'test3', "2022-01-01", "11123.45KM", "FBCD"],
        ["4", 'test4', "2022-01-01", "3123.45KM", "ABGD"],
    ]
};

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Table {...initParams} />
        </>

    )
}

export default Dashboard;