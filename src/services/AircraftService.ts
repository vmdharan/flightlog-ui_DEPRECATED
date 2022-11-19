import { Aircraft } from "../models/aircraft";
import { FL_AIRCRAFT, HOST_URI } from "./config";

const GetAircraft = async (id: string) => {
    const response = await fetch(HOST_URI + FL_AIRCRAFT + '/' + id)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });

    return response;
}

const GetAircraftList = async () => {
    const response = await fetch(HOST_URI + FL_AIRCRAFT)
        .then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
        });

    return response;
}

const createAircraft = async (aircraft: Aircraft) => {
    const postRequest = (postBody: any) => (
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: postBody })
        }
    );
    const postResult = await fetch(HOST_URI + FL_AIRCRAFT + '/create', postRequest('1'))
        .then(res => res.json())
        .catch(err => console.log(err));

    return postResult;
}

const editAircraft = async (aircraft: Aircraft) => {
    const putRequest = (postBody: any) => (
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: postBody })
        }
    );
    const putResult = await fetch(HOST_URI + FL_AIRCRAFT + '/edit', putRequest('1'))
        .then(res => res.json())
        .catch(err => console.log(err));

    return putResult;
}

const deleteAircraft = async (id: string) => {
    const deleteResult = await fetch(HOST_URI + FL_AIRCRAFT + '/delete/' + id, { method: 'DELETE' })
        .then(res => res.json())
        .catch(err => console.log(err));

    return deleteResult
}

export { 
    GetAircraft, 
    GetAircraftList, 
    createAircraft, 
    editAircraft, 
    deleteAircraft 
};
