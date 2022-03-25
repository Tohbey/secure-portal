import {
    request,
    requestFailure,
    requestStopLoading,
    getDocument,
    getDocumentByUser,
    getDocuments,
    createDocument,
    deleteDocument,
    shareDocuments
} from '../actions/document';
import Client from '../../utils/HTTPClient';
import { DocumentAPI, DocumentsByUser, ShareDocument, BASE_URL } from './APIs';
import { getAuthorizationHeader } from '../../utils/Auth';


export const addDocument = (document) => async (dispatch) => {
    dispatch(request());
    try {
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
        const res = await client.post(DocumentAPI, document);

        dispatch(requestStopLoading());
        if (res.data) {
            dispatch(createDocument(res.msg));
            console.log('Create document-> ', res);
        }

        return res.data;
    } catch (error) {
        dispatch(requestFailure(error));
        console.log(error);
    }
}

export const fetchDocumentByUser = () => async (dispatch) => {
    dispatch(request());
    try {
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
        const res = await client.get(DocumentsByUser);

        dispatch(requestStopLoading());

        if(res.data){
            console.log("Fetch Documents by User ->", res.data);
            dispatch(getDocumentByUser(res.data, res.msg));
        }

        return res.data;
    } catch (error) {
        dispatch(requestFailure(error));
        console.log(error);
    }
}

export const fetchDocument = (uuid) => async (dispatch) => {
    dispatch(request());
    try {
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
        const res = await client.get(DocumentAPI + uuid);
        
        dispatch(requestStopLoading());
        
        if(res.data){
            console.log("Fetch Document ->", res.data);
            dispatch(getDocument(res.data, res.msg))
        }

        return res.data
    } catch (error) {
        dispatch(requestFailure(error));
        console.log(error);
    }
}

export const fetchDocuments = () => async (dispatch) => {
    dispatch(request());
    try {
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
        const res = await client.get(DocumentAPI);

        dispatch(requestStopLoading());

        if(res.data){
            console.log("Fetch Documents ->", res.data);
            dispatch(getDocuments(res.data, res.msg));
        }

        return res.data;
    } catch (error) {
        dispatch(requestFailure(error));
        console.log(error);
    }
}

export const terminateDocument = (uuid) => async (dispatch) => {
    dispatch(request());
    try {
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
        const res = await client.delete(DocumentAPI + uuid);

        console.log(res);

        dispatch(deleteDocument(res.msg));

        return res;
    } catch (error) {
        dispatch(requestFailure(error));
        console.log(error);
    }
}

export const transferDocument = () => async (dispatch) => {
    dispatch(request());
    try {
        const headers = {
            'x-auth-token': getAuthorizationHeader(),
        };
        const client = new Client(BASE_URL, headers);
    } catch (error) {
        dispatch(requestFailure(error));
        console.log(error);
    }
}