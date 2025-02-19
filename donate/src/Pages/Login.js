import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import purnota from '../assets/puronta2.png'
import { MdHome } from "react-icons/md";

import './login.css'
import { useNavigate,Link } from 'react-router-dom';
import OuterNav from '../Components/OuterNav';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const Login = () => {

  const navigate = useNavigate();
  const user = useAuthContext()
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error } = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)
    await login(email, password)
    if (user) {
      // navigate('/')
    }
  }

  const toHome=()=>{
    navigate('/')

 }



  return (
    <>
      {/* <OuterNav /> */}
      <div className="puronta" onClick={toHome}><MdHome /></div>


{/* c:\Users\lukumoni doloi\Downloads\Blue Green Minimalist Food Donation Instagram Story.png */}

      <MDBContainer fluid className="p-5 my-5">
        <MDBRow>
          <MDBCol col='5' md='6'>
            <img src={purnota} class="img-fluid" alt="Phone image" />
          </MDBCol>
          <MDBCol col='4' md='6'>

            <div className=" login-body">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                {/* {error && <div className='error'>{error}</div>}     */}
                {error && <div className='error'>Wrong credentials</div>}
                <Button className='btn1 mt-4' type='submit'>login</Button>
                <Link style={{display:'flex',justifyContent:"center"}} to="/signup">signup</Link>
              </Form>
            </div>


          </MDBCol>
        </MDBRow>
      </MDBContainer>




















    </>
  );
}

export default Login;