import React from 'react';
import { Link } from 'react-router-dom';

const navigationItem = (props) => (
    <li>
        <Link 
            exact 
            to={props.link}
        >
            {props.children}
        </Link>
    </li>
)

export default navigationItem;
