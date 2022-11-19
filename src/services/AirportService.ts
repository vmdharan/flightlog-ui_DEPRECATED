import { Airport } from "../models/airport";
import { FL_AIRPORT, HOST_URI } from "./config";

const GetAirport = async (id: string) => {
    const response = await fetch(HOST_URI + FL_AIRPORT + '/' + id)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });

    return response;
}

const GetAirportList = async () => {
    const response = await fetch(HOST_URI + FL_AIRPORT)
        .then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
        });

    return response;
}

const createAirport = async (airport: Airport) => {
    const postRequest = (postBody: any) => (
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: postBody })
        }
    );
    const postResult = await fetch(HOST_URI + FL_AIRPORT + '/create', postRequest('1'))
        .then(res => res.json())
        .catch(err => console.log(err));

    return postResult;
}

const editAirport = async (airport: Airport) => {
    const putRequest = (postBody: any) => (
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: postBody })
        }
    );
    const putResult = await fetch(HOST_URI + FL_AIRPORT + '/edit', putRequest('1'))
        .then(res => res.json())
        .catch(err => console.log(err));

    return putResult;
}

const deleteAirport = async (id: string) => {
    const deleteResult = await fetch(HOST_URI + FL_AIRPORT + '/delete/' + id, { method: 'DELETE' })
        .then(res => res.json())
        .catch(err => console.log(err));

    return deleteResult
}

export { 
    GetAirport, 
    GetAirportList, 
    createAirport, 
    editAirport, 
    deleteAirport 
};
