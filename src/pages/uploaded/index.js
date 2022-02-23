import React from 'react';
import Dashboard from '../../container/dashboard';
import './index.scss';

const uploadedDocuments = () => {
    return (
        <Dashboard>
            <div className="uploaded">
                <p className="uploaded-header">Uploaded documents</p>
                <table className="table table-striped table-hover table-bordered">
                    <thead className="thead-light uploaded-subheader">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope="col">size</th>
                            <th scope="col">type</th>
                            <th scope="col">shared</th>
                            <th scope="col">created</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>testing</th>
                            <th>testing</th>
                            <th>testing</th>
                            <th>testing</th>
                            <th>testing</th>
                            <th>testing</th>
                            <td>
                                <button className="btn btn-danger" style={{"margin-right":"1rem"}}>delete</button>
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Dashboard>
    )
}

export default uploadedDocuments;
