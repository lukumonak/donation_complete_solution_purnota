import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import purnota from '../assets/puronta2.png'
import { MdHome } from "react-icons/md";
import './login.css'
import OuterNav from '../Components/OuterNav';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useNavigate,Link } from 'react-router-dom';
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

function Signup() {

const [email,setemail]=useState('')
const [password,setPassword]=useState('')
const {signup,isloading,error}=useSignup()
const navigate=useNavigate();

 const signupClick=async()=>{
    await signup(email,password)
    console.log(email,password)
    // navigate('/login')
 }
 
 const toHome=()=>{
    navigate('/')

 }

    return (
        <>

        <div className="puronta" onClick={toHome}><MdHome /></div>
     <MDBContainer fluid className="p-5 my-5">
       <MDBRow>
         <MDBCol col='5' md='6'>
           <img src={purnota} class="img-fluid" alt="Phone image" />
         </MDBCol>
         <MDBCol col='4' md='6'>
         <div className=" login-body">
     <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setemail(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Create a Password</Form.Label>
             <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
         </Form.Group>
         {error && <div className='error'>{error}</div>}
         <Button className='btn1 mt-4' onClick={signupClick} disabled={isloading} >Sign-up</Button>
         <Link style={{display:'flex',justifyContent:"center"}} to="/login">login</Link>
     </Form>

 </div>
         </MDBCol>
       </MDBRow>
     </MDBContainer>




        </>
    );
}
export default Signup;