import React from 'react';
import Dashboard from '../../container/dashboard';
import './index.scss'

const profile = () => {
    return (
        <Dashboard>
            <p className="header">Profile</p>
            <div className="content">
                <div>
                    <p>name</p>
                </div>
                <div>
                    <p>role</p>
                </div>
                <div>
                    <p>email</p>
                </div>
                <div>
                    <p>secret question</p>
                </div>
            </div>
        </Dashboard>
    )
}

export default profile;
