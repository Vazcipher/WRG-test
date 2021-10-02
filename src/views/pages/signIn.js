import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap"
import NavBar from "../components/navBar"
import Sidebar from "../components/sideBar"
import '../../assets/css/global.css'
import { login } from "../../services"
import { useState } from "react"
import { useHistory } from "react-router"
const SignIn = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const toDashboard = () => {
        history.push('/dashboard')
    }

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value,
        })
    }

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
                toDashboard()
            }
        }
    }

    return (
        <div style={{ height: '100vh' }}>
            <NavBar />
            <Container fluid className="h-75">
                <Row className="h-100">

                    <Col sm={12}>
                        <Row className="h-100 align-items-center justify-content-center">
                            <Col sm={4} className="d-flex align-items-center justify-content-center">
                                <Form onSubmit={(e) => handleLogin(e)}>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control onChange={(e) => handleChange(e)} type="username" placeholder="Enter Username" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={(e) => handleChange(e)} type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignIn