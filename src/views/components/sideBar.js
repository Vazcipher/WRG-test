import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import '../../assets/css/global.css'
import {Link} from 'react-router-dom'

const Side = () => {

    return (
        <>

            <Nav defaultActiveKey="/dashboard" className="flex-column">
                <Nav.Link href="/dashboard">List User</Nav.Link>
                <Nav.Link href="/add-user">Add User</Nav.Link>
            </Nav>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar