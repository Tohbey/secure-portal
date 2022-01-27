import React from 'react';

import NavigationItem from '../navigationItem';

const navigationItems = (props) => (
    <div>
        <header>
            <div>
                Secure Portal
            </div>
        </header>

        <ul>
            <NavigationItem link="/home">Home</NavigationItem>
            <NavigationItem link="/uploaded">uploaded documents</NavigationItem>
            <NavigationItem link="/share">share</NavigationItem>
            <NavigationItem link="/shared-document">shared documents</NavigationItem>
            <NavigationItem link="/profile">hello, email</NavigationItem>
            <button>Logout</button>
        </ul>
    </div>
)

export default navigationItems;


