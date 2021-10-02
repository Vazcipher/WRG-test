import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap"
import NavBar from "../components/navBar"
import Sidebar from "../components/sideBar"
import '../../assets/css/global.css'
import { login } from "../../services"
import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import axios from 'axios'
import User from "./User"

const Dashboard = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [users, setUsers] = useState([])

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value,
        })
    }
    console.log(users)
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
            setUsers(res.data.results)
        })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div style={{ height: '100vh' }}>
            <NavBar />
            <Container fluid className="h-75">
                <Row className="h-100">
                    <Col className="d-none d-sm-block" sm={2}>
                        <Sidebar />
                    </Col>
                    
                    <Col sm={10}>
                    <h5>List Of Users</h5>
                        {users.length && users.map((item, index) => 
                        <Row >
                            <User data={item.user.name.first}/>
                        </Row>)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard