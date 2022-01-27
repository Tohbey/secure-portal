import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.scss';


const navigationItem = (props) => (
    <li className="nav-items">
        <Link  
            to={props.link}
            style={{textDecoration: 'none', color:'black'}}
        >
            {props.children}
        </Link>
    </li>
)

export default navigationItem;
