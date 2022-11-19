import { Entry } from "../models/entry";
import { FL_ENTRY, HOST_URI } from "./config";

const GetEntry = async (id: string) => {
    const response = await fetch(HOST_URI + FL_ENTRY + '/' + id)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });

    return response;
}

const GetEntryList = async () => {
    const response = await fetch(HOST_URI + FL_ENTRY)
        .then(response => {
            return response.json();
        }).catch(err => {
            console.log(err);
        });

    return response;
}

const createEntry = async (entry: Entry) => {
    const postRequest = (postBody: any) => (
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: postBody })
        }
    );
    const postResult = await fetch(HOST_URI + FL_ENTRY + '/create', postRequest('1'))
        .then(res => res.json())
        .catch(err => console.log(err));

    return postResult;
}

const editEntry = async (entry: Entry) => {
    const putRequest = (postBody: any) => (
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: postBody })
        }
    );
    const putResult = await fetch(HOST_URI + FL_ENTRY + '/edit', putRequest('1'))
        .then(res => res.json())
        .catch(err => console.log(err));

    return putResult;
}

const deleteEntry = async (id: string) => {
    const deleteResult = await fetch(HOST_URI + FL_ENTRY + '/delete/' + id, { method: 'DELETE' })
        .then(res => res.json())
        .catch(err => console.log(err));

    return deleteResult
}

export { 
    GetEntry, 
    GetEntryList, 
    createEntry, 
    editEntry, 
    deleteEntry 
};
