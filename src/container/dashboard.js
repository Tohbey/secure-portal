import React, { Fragment,Component } from 'react';
import Navbar from '../components/navbar/navbar';

class Dashboard extends Component {
  render() {
    return (
        <Fragment>
            <Navbar />
            <main>{this.props.children}</main>
        </Fragment>
    );
  }
}

export default Dashboard;