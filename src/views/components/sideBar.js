import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import '../../assets/css/global.css'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router"


const Side = () => {

    const history=useHistory()

    const toAddUser = () => {
        history.push('/adduser')
    }

    return (
        <>

            <Nav defaultActiveKey="/dashboard" className="flex-column">
                <Nav.Link href="/dashboard">List User</Nav.Link>
                <Nav.Link href="/adduser">Add User</Nav.Link>
            </Nav>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar