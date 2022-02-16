import React, { Fragment,Component } from 'react';
import Navbar from '../components/navbar/navbar';
import './dashboard.scss'
class Dashboard extends Component {
  render() {
    return (
        <Fragment>
            <Navbar />
            <main className="main">{this.props.children}</main>
        </Fragment>
    );
  }
}

export default Dashboard;