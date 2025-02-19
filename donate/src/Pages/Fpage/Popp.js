import React, { useRef, useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Popp({ onClose, ownerEmail }) {
    console.log(ownerEmail)

    const inptRef1 = useRef()
    const inptRef2 = useRef()
    const inptRef3 = useRef()
    const inptRef4 = useRef()


    const [isWindowVisible, setWindowVisible] = useState(true);

    const handleClose = () => {
        setWindowVisible(false);
        onClose(); // Call the onClose function provided by the parent component
        console.log(ownerEmail)
    };

    const handleSubmit = (event) => {

        // Handle form submission
        event.preventDefault();
        // Additional logic here
    };
    const pickupsubmit = async () => {
        var pickPersonName = inptRef1.current.value
        var pickPersonid = inptRef2.current.value
        var pickPersonEmail = inptRef3.current.value
        var pickPersonContectno = inptRef4.current.value
        const pickUpDetails = { pickPersonName, pickPersonid, pickPersonEmail, pickPersonContectno, ownerEmail }
        console.log(pickUpDetails)

        axios.post('http://localhost:4000/api/organization/sndMail', pickUpDetails)
            .then(respone => {
                console.log("data sent successfully", respone.data)
            })
            .catch(error => {
                console.log("error:", error)
            })

        setWindowVisible(false); // if we take it under the response =>{....} then window close after email send
        onClose(); 

    }

    const pop = {
        display: isWindowVisible ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f1f1f1',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        width: '300px', // Adjust width as needed
    };

    return (
        <div style={pop}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Pickup person complete Name</Form.Label>
                    <Form.Control ref={inptRef1} placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Pickup person organization Id</Form.Label>
                    <Form.Control ref={inptRef2} placeholder="eg:IZUF9384" />
                </Form.Group>

                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={inptRef3} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control ref={inptRef4} type="tel" placeholder="123456789" />
                    </Form.Group>
                </Row>

                <Button className='btn1 mt-4' onClick={pickupsubmit}>Submit</Button>
                <Button className='btn1 mt-1' onClick={handleClose}>Cancel</Button>
            </Form>
        </div>
    );
}

export default Popp;
