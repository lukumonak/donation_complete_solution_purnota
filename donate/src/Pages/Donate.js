import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../Components/cssfiles/donate.css'
import Navbr from '../Components/Navbr'
import Footer from '../Components/Footer'
import { useRef, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate, Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}

  from 'mdb-react-ui-kit';

function Donate() {

  const inputRef1 = useRef()
  const inputRef2 = useRef()
  const inputRef3 = useRef()
  const inputRef4 = useRef()
  const inputRef5 = useRef()
  const inputRef6 = useRef()

  const [error, setError] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const navigate = useNavigate()

  const user = useAuthContext()

  const submitForm = async () => {
    console.log("form submited")
    var name = inputRef1.current.value
    var type = inputRef2.current.value
    var weight = inputRef3.current.value
    var pincode = inputRef4.current.value
    var landmark = inputRef5.current.value
    var email = inputRef6.current.value


    if (name.length === 0 || type.length === 0 || weight.length === 0 || pincode.length === 0 || landmark.length === 0 || email.length === 0) {
      setError("!!!!!! please fill the all fields")
    }


    else {


      const productData = { name, type, weight,email, pincode, landmark }
      console.log(productData)

      console.log(user)


      if (user.user === null) {
        alert('you need to logged in')
      }


      const response = await fetch('http://localhost:4000/api/oldThs/', {
        method: 'POST',
        headers: {
          'Accept': 'Application/json',
          'Content-Type': 'Application/json',
          'Authorization': `Bearer ${user.user.token}`
        },
        body: JSON.stringify(productData)
      })
      const json = await response.json()

      if (response.ok) {
        // window.confirm("Are you sure")
        // setShowSuccessAlert(true)
        alert(" your request Submitted successfully")

        navigate('/access')
      }
      if (!response.ok) {
        alert.error("there is an problem");
      }

    }

  }







  return (<>

    <Navbr />



    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            Your small step <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>Make big difference</span>
          </h1>
          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            NOTE: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>



          <Form className='Form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your good Name:</Form.Label>
              <Form.Control type="name" ref={inputRef1} placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Donate product type: </Form.Label>
              <Form.Control type="type" ref={inputRef2} placeholder="Ex-Cloths, Stationary, Food etc" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Donate product approx waight: </Form.Label>
              <Form.Control type="waight" ref={inputRef3} placeholder="waight(kg)" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>email: </Form.Label>
              <Form.Control type="email" ref={inputRef6} placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>pincode: </Form.Label>
              <Form.Control type="pincode" ref={inputRef4} placeholder="postel code" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Local Area landmark: </Form.Label>
              <Form.Control type="Landmark" ref={inputRef5} placeholder="Landmark" />
            </Form.Group>

            {<div className='error' style={{ color: 'red' }}>{error}</div>}
            <Button className='btn1 mt-4' onClick={submitForm}>submit</Button>
            <Link style={{ display: 'flex', justifyContent: "center" }} to="/access">your Uploads</Link>

          </Form>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <di>{user.token}</di>
    <Footer />
  </>
  );
}

export default Donate;