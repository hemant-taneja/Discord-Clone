import React ,{useRef} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'

export default function Login({onIDsubmit}) {
    const idRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        onIDsubmit(idRef.current.value)
    }

    function createNewId() {
        onIDsubmit(uuidV4())
    }

    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} classsName="w-100">
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef}/>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant ="secondary">Create a New ID</Button>
            </Form>
        </Container>
    )
}
