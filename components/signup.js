import { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import styles from '../styles/Signup.module.css'

import {database} from '../services/firebase'

export default function Signup(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        
        database.collection("contacts")
            .add({
            name: name,
            email: email,
            message: message,
            })
            .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
            })
            .catch((error) => {
            alert(error.message);
            setLoader(false);
            });
  
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <Container 
            id = 'signup'
            className={styles.signupContainer}>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" 
                        placeholder="Name" 
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}/>
                </Form.Group>

                <br/>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <br/>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describe what you need</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        value = {message}
                        onChange = {(e) => setMessage(e.target.value)}/>
                </Form.Group>
                <Button 
                    className={styles.signupButton} 
                    type="submit">
                    {loader ? 'Loading...' : 'Submit'}
                </Button>
            </Form>
        </Container>
    )
}