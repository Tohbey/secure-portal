import React from 'react';
import NavigationItems from '../navigation/navigationItems';
import '../styles.scss';

const NavBar = (props) => (
    <div className="navigation">
        <header className="navigation-logo">
            <div className="navigation-logo-body">
                Secure Portal
            </div>
        </header>
        <nav className="nav">
            <NavigationItems />
        </nav>
    </div>
);

export default NavBar;