import {
    REQUEST,
    REQUEST_FAILURE,
    REQUEST_STOP,
    DELETE_DOCUMENT,
    CREATE_DOCUMENT,
    GET_DOCUMENT,
    GET_DOCUMENTS_BY_USER,
    GET_DOCUMENTS,
    SHARE_DOCUMENT
} from '../actionTypes/document';

export const request = () => {
    return{
        type: REQUEST,
    }
}

export const requestStopLoading = () => {
    return{
        type: REQUEST_STOP,
    }
}

export const requestFailure = (error) => {
    return{
        type: REQUEST_FAILURE,
        payload: error
    }
}

export const getDocument = (document, response) =>{
    return{
        type: GET_DOCUMENT,
        payload: document,
        msg: response
    }
}

export const getDocuments = (documents, response) =>{
    return{
        type: GET_DOCUMENTS,
        payload: documents,
        msg: response
    }
}

export const getDocumentByUser = (documents, response) =>{
    return{
        type: GET_DOCUMENTS_BY_USER,
        payload: documents,
        msg: response
    }
}

export const createDocument = (response) =>{
    return{
        type: CREATE_DOCUMENT,
        msg: response
    }
}

export const deleteDocument = (response) =>{
    return{
        type: DELETE_DOCUMENT,
        msg: response
    }
}

export const shareDocuments = () => {
    return{
        type: SHARE_DOCUMENT
    }
}