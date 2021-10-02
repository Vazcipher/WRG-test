import React from 'react'
import { Row, Col, Container, Form, Button, ButtonGroup } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import NavBar from "../components/navBar"
import Sidebar from "../components/sideBar"
import {useState} from 'react'

export default function AddUser() {

    const [userDetails, setUserDetails] = useState({
        gender: "",
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        dob: '',
        phone: ''

    })

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.id]: e.target.value,
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
       console.log(e);
    }


    return (
        <div>
            <NavBar />
            <Container>
                <Row>
                    <Col md={2} lg={2} sm={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10} lg={10} sm={10}>
                        <h3 className="mb-3">User Registration</h3>
                        <Form onSubmit={(e) => handleLogin(e)}>
                            <fieldset>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={2}>
                                        Gender
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="Male"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Female"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Transgender"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control onChange={(e) => handleChange(e)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control onChange={(e) => handleChange(e)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter User Name" onChange={(e) => handleChange(e)} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>DOB</Form.Label>
                                    <Form.Control type="date" onChange={(e) => handleChange(e)} />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Phone Number" onChange={(e) => handleChange(e)} />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
