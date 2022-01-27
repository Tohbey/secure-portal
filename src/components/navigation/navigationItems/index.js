import React from 'react';

import NavigationItem from '../navigationItem';
import '../../styles.scss';

const navigationItems = (props) => (
    <div className="nav">
        <ul  className="nav-list">
            <NavigationItem link="/home">Home</NavigationItem>
            <NavigationItem link="/uploaded">uploaded documents</NavigationItem>
            <NavigationItem link="/share">share</NavigationItem>
            <NavigationItem link="/shared-document">shared documents</NavigationItem>
            <NavigationItem link="/profile">hello, email</NavigationItem>
            <button className="logout-button">Logout</button>
        </ul>
    </div>
)

export default navigationItems;


