import React from 'react';
import Dashboard from '../../container/dashboard';
import './index.scss';

const sharedDocuments = () => {
    return (
        <Dashboard>
            <div className="shared">
                <p className="shared-header">Shared Documents</p>
                <table className="table table-striped table-hover table-bordered">
                    <thead className="thead-light shared-subheader">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">document</th>
                            <th scope="col">owner</th>
                            <th scope="col">permission</th>
                            <th scope="col">description</th>
                            <th scope="col">size</th>
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
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Dashboard>
    )
}

export default sharedDocuments;
