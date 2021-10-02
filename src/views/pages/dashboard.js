import { Button, Col, Container, Form, Nav, Row, FormControl } from "react-bootstrap"
import NavBar from "../components/navBar"
import Sidebar from "../components/sideBar"
import '../../assets/css/global.css'
import { login } from "../../services"
import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import axios from 'axios'
import { Table } from 'react-bootstrap'

const Dashboard = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [users, setUsers] = useState([])

    const [search, setSearch] = useState("")


    // console.log(search);
    // console.log(users[0]);
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value,
        })
    }
    // console.log(users[0].user.name.first)
    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.username !== '' && credentials.password !== '') {
            const data = {
                username: credentials.username,
                password: credentials.password
            }
            const res = login(data)
            console.log('res ', res);
            if (res === "success") {

            }
        }
    }


    const toDashboard = () => {
        history.push('/dashboard')
    }

    const fetchUser = async () => {
        await axios.get("https://randomuser.me/api/0.8/?results=20").then(res => {
            console.log(res)
            window.localStorage.setItem("Users",JSON.stringify(res.data.results))
            setUsers(res.data.results)
        })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div style={{ height: '100vh' }}>
            <NavBar />

            <Container>
                <Row>
                    <Col md={2} sm={2} lg={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10} sm={10} lg={10}>
                        <h5>List Of Users</h5>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search User"
                                className="mb-2"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Form>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>First Name</th>
                                    <th>Gender</th>
                                    <th>Location</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    (JSON.parse(window.localStorage.getItem("Users")).filter(item => {
                                        if (search === "") {
                                            return item
                                        }
                                        else if (item.user.name.first.toLowerCase().includes(search.toLowerCase())) {
                                            return item
                                        }
                                        else {
                                            return item
                                        }

                                    })
                                        .map((item, index) =>
                                            <tr>
                                                <td><img src={`${item.user.picture.medium}`} /> </td>
                                                <td>{item.user.name.first} </td>
                                                <td>{item.user.gender}</td>
                                                <td>{item.user.location.city}</td>
                                                <td>{item.user.email}</td>
                                            </tr>
                                        ))
                                }

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            {/* <Container fluid className="h-75">
                <Row className="h-100">
                    <Col className="d-none d-sm-block" sm={2}>
                        <Sidebar />
                    </Col>
                    
                    <Col sm={10}>
                        <h5>List Of Users</h5>

                        {users.length && users.map((item, index) =>
                            <Col>
                                <User data={item.user.name.first} />
                            </Col>

                        )}

                    </Col>
                </Row>
            </Container> */}
        </div>
    )
}

export default Dashboard